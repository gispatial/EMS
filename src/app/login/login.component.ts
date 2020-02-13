import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('partner@example.com', [Validators.required]),
      password: new FormControl('123456', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data: Object) {
    if (this.loginForm.status === 'INVALID') return
    this.apiService.post('users', this.loginForm.value)
      .subscribe((data)=>{  
        this.authService.setCurrentSession(data);
        this.loginForm.reset();
        this.router.navigate(['/dashboard']);
      })
  }

  onCancel() {
    this.loginForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
