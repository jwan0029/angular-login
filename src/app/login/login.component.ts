import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({ 
    selector: 'app-login',
    templateUrl: 'login.component.html' ,
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    submitted = false;
    onSubmit(data){
    this.submitted = true;
    console.warn(data);
    this.router.navigate(['/']);
    
}

    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in
        if (this.accountService.accountValue) {
            this.router.navigate(['/']);
        }

        if (this.submitted == true) {
            this.router.navigate(['/']);
        }
    }

    login() {
        this.accountService.login();
        this.router.navigate(['/']);
    }
}
