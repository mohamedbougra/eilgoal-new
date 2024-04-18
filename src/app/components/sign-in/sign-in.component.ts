import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { LayoutService } from '../../layout/service/app.layout.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
layoutService: any;
  constructor(
    public authService: AuthService,
    public LayoutService: LayoutService
  ) { }
  ngOnInit() { }
}