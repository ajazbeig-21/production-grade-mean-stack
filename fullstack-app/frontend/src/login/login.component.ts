import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  imports:[FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  // login() {
  //   this.auth.login(this.email, this.password).subscribe(() => {
  //     this.router.navigate(['/dashboard']);
  //   });
  // }

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        // ✅ Store token after login success
        this.auth.setToken(res.token);

        // ✅ Navigate to dashboard or any route
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login failed', err);
        // Optional: Show error to user
      }
    });
  }

}

