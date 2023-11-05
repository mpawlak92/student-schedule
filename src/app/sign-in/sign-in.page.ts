import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage  {
  isLoading = false

  errorMessage: string = ''

  constructor(public router: Router, private authService:AuthService) {}

  onSubmit(form:NgForm){
    
    this.isLoading = true
    this.errorMessage = ''

    if(form.valid === false) {
      this.isLoading = false
      this.errorMessage = 'Niepoprawne dane logowania'
      
    }else{

      this.authService.logIn(form.value.email, form.value.password).subscribe(resData =>{
        console.log(resData)
        this.isLoading = false
        this.router.navigate(['/home'])
        
      },errorMrssage =>{
        this.isLoading = false

        if(errorMrssage.error.error.message ==='USER_DISABLED'){
          this.errorMessage = 'Użytkownik wyłączony przez administratora'
        } else {
          this.errorMessage = 'Niepoprawne dane logowania'
        }
        
        
      })

     

    }

  }


  

}
