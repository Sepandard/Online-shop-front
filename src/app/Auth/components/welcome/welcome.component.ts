import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  nickName : String = ''
  constructor(private authSrv:AuthService) { }

  ngOnInit(): void {
     this.nickName=this.authSrv.nickName
    
  }

}
