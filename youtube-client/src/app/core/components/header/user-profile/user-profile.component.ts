import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/authentication/services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  private name: string = '';

  private avatarURL: string = '';

  constructor(
    public loginService: LoginService,
  ) { }

  public ngOnInit(): void {
  }
}
