import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../core/auth.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-dashboard',
  imports:[CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  users: any[] = [];

  // constructor(private http: HttpClient, protected auth: AuthService) {}

  constructor(private userService:UserService,  protected auth: AuthService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => {
        console.log('Users:', users);
        this.users=users;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
    
  }

  logout(){
    this.auth.logout();
  }
}
