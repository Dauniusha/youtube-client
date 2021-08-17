import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { setting } from 'src/app/settings/setting';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private router: Router,
  ) { }

  public login() {
    const token = LoginService.getToken();
    localStorage.setItem(setting.stringConstants.storeNames.token, token);
    this.router.navigate(['']);
  }

  public logout() {
    localStorage.removeItem(setting.stringConstants.storeNames.token);
    this.router.navigate(['login']);
  }

  private static getToken(): string {
    return Math.random().toString(16);
  }
}
