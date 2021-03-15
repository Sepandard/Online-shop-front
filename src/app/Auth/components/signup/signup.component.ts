import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from 'src/models/user';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  model: User;
  redemptionOfYearsFormConfig: FormlyFieldConfig[];
  redemptionOfYearsForm = new FormGroup({});
  redemptionOfYearsFormModel: any = {};
  onSubmit() {
    console.log(this.redemptionOfYearsFormModel);
    
    this.authSrv.singup(this.redemptionOfYearsFormModel)
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
            className: 'flex-25 padding-10',
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
            className: 'flex-25 padding-20',
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
          {
            className: 'flex-25 padding-20',
            key: 'user_nickname',
            type: 'input',

            templateOptions: {
              label: 'name',
              Placeholder: 'Password',
              required: true,
            },
          },
          {
            key: 'user_gender',
            type: 'radio',
            templateOptions: {
              type: 'radio',
              label: 'Gender',
              required: true,
              name: 'gender',
              options: [
                { value: 'Male', key: '1' },
                { value: 'Female', key: '2' },
                { value: 'Other', key: '3' },
              ],
            },
          },
        ],
      },
    ];
  }
}
