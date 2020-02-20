import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService, Session } from '../services/auth.service';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  currentUser: Session = null;
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.currentUser = authService.getCurrentSession()
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.clearCurrentSession();
    this.router.navigate(['auth']);
  }
}
