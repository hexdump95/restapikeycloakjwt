import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { User } from './login/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  user: User = new User();

  constructor(private readonly authService: AuthService) {
    this.user.username = "username";
    this.user.password = "password";
  }

  onSubmit(form: NgForm) {
    const user = {
      username: form.value.username,
      password: form.value.password,
    }
    this.authService.login(user)
      .subscribe(
        (res) => {
          localStorage.setItem("token", res.access_token);
        });
    form.resetForm();
  }


}
