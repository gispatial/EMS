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
    return null;
    return {
      id: '1',
      email: 'test@example.com',
    }
  }

  public isAuthenticated(): boolean {
    return this.getCurrentSession() !== null;
  }
}
