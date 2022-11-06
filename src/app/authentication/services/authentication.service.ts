import {Injectable} from '@angular/core';
import {from} from "rxjs";
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import firebase from "firebase/compat";
import {MessageService} from "primeng/api";
import {Profile} from "../../bucket/interfaces/profile.interface";
import User = firebase.User;
import FirebaseError = firebase.FirebaseError;

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private messageService: MessageService
    ) {
        this.afAuth.user.subscribe((user) => user ? this.setLocalUser(user) : this.removeLocalUser());
        this.afAuth.idToken.subscribe((idToken) => idToken ? this.setIdToken(idToken) : this.removeIdToken());
    }

    public getLocalUser(): User {
        const user = JSON.parse(localStorage.getItem('user')!);
        user.photoURL = user.photoURL ?? 'assets/profile/empty-profile.png';
        return user;
    }

    private setLocalUser(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    private removeLocalUser() {
        localStorage.removeItem('user');
    }

    public getIdToken() {
        return localStorage.getItem('idToken');
    }

    private setIdToken(idToken: string) {
        localStorage.setItem('idToken', idToken);
    }

    private removeIdToken() {
        localStorage.removeItem('idToken');
    }

    get username() {
        return JSON.parse(localStorage.getItem('user')!)?.displayName;
    }

    public getProfile() {
        from(this.afAuth.currentUser).subscribe({
            next: (user) => this.setLocalUser(user!)
        })
    }

    public setProfile(profile: Profile) {
        from(this.afAuth.currentUser).subscribe({
            next: (user) => from(user!.updateProfile(profile)).subscribe({
                next: () => this.setLocalUser(user!)
            })
        });
    }

    public SignIn(email: string, password: string) {
        from(this.afAuth.signInWithEmailAndPassword(email, password)).subscribe({
            next: (userCredential) => {
                this.setLocalUser(userCredential.user!);
                this.router.navigate(['bucket']);
            },
            error: () => this.messageService.add({
                severity: 'error',
                summary: 'Login Failed!',
                detail: "Invalid email or password!"
            })
        })
    }

    // Sign up with email/password
    public SignUp(email: string, password: string, displayName: string) {
        if (!email || !password || !displayName) {
            return this.messageService.add({
                severity: 'error',
                summary: 'Registration failed!',
                detail: 'Please complete all fields!'
            });
        } else {
            return this.afAuth
                .createUserWithEmailAndPassword(email, password)
                .then((result) => {
                    /* Call the SendVerificationMail() function when new user sign
                    up and returns promise */
                    this.SendVerificationMail().then(() => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Registration success!',
                            detail: 'Welcome to your BucketList, please verify your email address!'
                        });
                    })
                    result.user?.updateProfile({
                        displayName: displayName
                    })
                })
                .catch((error: FirebaseError) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Registration failed!',
                        detail: error.message
                    });
                });
        }
    }

    // Send email verification when new user sign up
    public SendVerificationMail() {
        return this.afAuth.currentUser
            .then((u: any) => u.sendEmailVerification())
            .then(() => {
                //this.router.navigate(['verify-email-address']);
            });
    }

    public SignOut() {
        from(this.afAuth.signOut()).subscribe({
            complete: () => {
                this.removeLocalUser();
                this.router.navigate(['auth']);
            }
        })
    }

    // Returns true when user is logged in and email is verified
    get isLoggedIn() {
        return this.getLocalUser() !== null;
    }
}
