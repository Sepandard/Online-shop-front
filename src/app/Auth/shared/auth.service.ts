import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BaseService } from 'shared/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private baseSrv: BaseService,
    private matsnack: MatSnackBar,
    private router: Router
  ) {}
  nickName: String;
  singup(model: any) {
    return this.baseSrv
      .postReq(model, 'auth/register')
      .subscribe((res: any) => {
        if (res.Success) {
          this.nickName = res.data[0].nickname;
          this.router.navigate(['/online-shop/auth/welcome']);
        } else {
          let errMss = res.error.split('=');
          this.matsnack.open('user ' + errMss[1], 'X', { duration: 5000 });
        }
      });
  }
  login(model: any) {
    this.baseSrv.postReq(model, 'auth/login').subscribe((res: any) => {
      if (res.Success) {
        localStorage.setItem('nickName',res.data[0].nickname)
        localStorage.setItem('token',res.data[0].token)
        this.matsnack.open('Welcome! <3', 'X', { duration: 5000 });
        
        this.router.navigate(['/online-shop/products/product-list']);
      } else {
        this.matsnack.open(res.message, 'X', { duration: 5000 });
      }
    });
  }
}
