import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginmodel: { user_name: string, password: string } = { user_name: '', password: '' };

  constructor(
    private router: Router
     ) { }

  onSubmit() {
    if (this.loginmodel.user_name.trim() === '' || this.loginmodel.password === '') {
      alert('Please enter username and password.');
      return;
    }
    if (this.login(this.loginmodel)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password.');
    }
  }
  login(data: any){
    console.log("SUCCESS",data);
    return true;
    
  }
}
