import { FormControl, FormGroup } from '@angular/forms';

export const registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    name: new FormControl()
});

export const loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
});
