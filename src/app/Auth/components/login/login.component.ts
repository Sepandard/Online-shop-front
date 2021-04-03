import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
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
  redemptionOfYearsFormConfig: FormlyFieldConfig[];
  redemptionOfYearsForm = new FormGroup({});
  redemptionOfYearsFormModel: any = {};
  onSubmit() {
    
    
    
  }
   constructor(private authSrv:AuthService) {}

  ngOnInit(): void {
    this.redemptionOfYearsinitForm();
  }
  redemptionOfYearsinitForm() {
    this.redemptionOfYearsFormConfig = [
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
