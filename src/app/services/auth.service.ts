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

  public setCurrentSession(data: any) {
    localStorage.setItem('current_user', JSON.stringify(data))
  }

  public clearCurrentSession() {
    localStorage.setItem('current_user', null)
  }

  public isAuthenticated(): boolean {
    return this.getCurrentSession() !== null;
  }
}
