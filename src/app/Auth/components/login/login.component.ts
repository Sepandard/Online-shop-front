import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    value: new FormControl(''),
  });
  loginFormConfig: FormlyFieldConfig[];
  loginForm = new FormGroup({});
  loginFormModel: any = {};
  onSubmit() {
    this.authSrv.login(this.loginFormModel);
  }
  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.redemptionOfYearsinitForm();
  }
  redemptionOfYearsinitForm() {
    this.loginFormConfig = [
      {
        fieldGroupClassName: 'flex-container',
        fieldGroup: [
          {
            className: 'flex-100 padding-10',
            key: 'user_email',
            type: 'input',
            templateOptions: {
              pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
              type: 'email',
              label: 'Email',
              Placeholder: 'Ex@Example.com',
              required: true,
            },
            validation: {
              messages: {
                pattern: (error, field: FormlyFieldConfig) => `Email invalid`,
              },
            },
          },
          {
            className: 'flex-100 padding-10',
            key: 'password',
            type: 'input',

            templateOptions: {
              minLength: 8,

              type: 'password',
              label: 'Password',
              Placeholder: 'Password',
              required: true,
            },
          },
        ],
      },
    ];
  }
}
