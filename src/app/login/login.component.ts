import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

    form: FormGroup;
    submitted = false;

    onSubmit(login) {
        //this.submitted = true;
        //console.warn(loginForm.value);
        console.log(login.email);
        console.log(login.password);
        //if (this.submitted == true) {
        //this.router.navigate(['/']);}
    }

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private accountService: AccountService,
    ) {
        // redirect to home if already logged in
        if (this.accountService.accountValue) {
            this.router.navigate(['/']);
        }

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        this.accountService.login();
        this.router.navigate(['/']);
    }


}
