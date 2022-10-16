import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import firebase from "firebase/compat";
import User = firebase.User;

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    authorizedUser!: User;
    idToken: string = '';

    constructor(
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router
    ) {
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.authorizedUser = user;
                localStorage.setItem('user', JSON.stringify(user));
                user.getIdToken().then((idToken) => this.idToken = idToken);
            } else {
                localStorage.setItem('user', 'null');
            }
        });
    }

    // Sign in with email/password
    SignIn(email: string, password: string) {
        return this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.afAuth.authState.subscribe((user) => {
                    if (user) {
                        this.router.navigate(['bucket']);
                    }
                });
            })
            .catch((error) => {
                window.alert(error.message);
            });
    }

    // Sign up with email/password
    SignUp(email: string, password: string) {
        return this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                /* Call the SendVerificationMail() function when new user sign
                up and returns promise */
                this.SendVerificationMail()
            })
            .catch((error) => {
                window.alert(error.message);
            });
    }

    // Send email verification when new user sign up
    SendVerificationMail() {
        return this.afAuth.currentUser
            .then((u: any) => u.sendEmailVerification())
            .then(() => {
                //this.router.navigate(['verify-email-address']);
            });
    }

    // Returns true when user is logged in and email is verified
    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!);
        return user !== null && user.emailVerified !== false;
    }

    // Sign out
    SignOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['auth']);
        });
    }
}
