import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    private _register: boolean = false;

    constructor() {
        this._register = false
    }

    get register(): boolean {
        return this._register;
    }

    set register(value: boolean) {
        this._register = value;
    }
}