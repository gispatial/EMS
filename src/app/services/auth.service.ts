import { Injectable } from '@angular/core';

export interface Session {
  id?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getCurrentSession(): Session {
    return JSON.parse(localStorage.getItem('current_user'))
  }

  public setCurrentSession(data) {
    localStorage.setItem('current_user', JSON.stringify(data))
  }

  public isAuthenticated(): boolean {
    return this.getCurrentSession() !== null;
  }
}
