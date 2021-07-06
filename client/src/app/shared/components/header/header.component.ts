import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    const token = this.authService.getToken();
    if(token==null) return false;
    else return true;
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout().subscribe(r => {
      this.router.navigate(['/']);
    });
  }
  
}
