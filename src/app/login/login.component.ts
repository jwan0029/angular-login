import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    loginForm: FormGroup;

    submitted = false;

    onSubmit(loginForm: NgForm) {
        this.submitted = true;
        //console.warn(loginForm.value);
        console.log(loginForm.email);
        console.log(loginForm.password);
        if (this.submitted == true) {
        this.router.navigate(['/thankyou']);}
    }

    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in
        if (this.accountService.accountValue) {
            this.router.navigate(['/thankyou']);
        }

    }

    login() {
        this.accountService.login();
        this.router.navigate(['/thankyou']);
    }

ngOnInit(): void{
 this.loginForm = new FormGroup({
 email: new FormControl(null,[
    Validators.required,
    Validators.email
 ]),
 password: new FormControl(null,[
     Validators.required
 ])

 })

}


}
