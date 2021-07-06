import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private authService: AuthService) {
    this.user.username = "username";
    this.user.password = "password";
  }

  onSubmit(form: NgForm) {
    const user = {
      username: form.value.username,
      password: form.value.password,
    }
    this.authService.login(user);
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
