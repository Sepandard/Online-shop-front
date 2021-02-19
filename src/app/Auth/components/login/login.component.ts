import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

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
    console.log(this.profileForm.value);
  }
  constructor() {}

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
            key: 'EstablishmentAmount',
            type: 'input',
            templateOptions: {
              label: 'Email',
              Placeholder: 'Example@',
              required: true,
            },
          },
          {
            className: 'flex-25 padding-10',
            key: 'EstablishmentAmount',
            type: 'input',
            templateOptions: {
              label: 'Email',
              Placeholder: 'Example@',
              required: true,
            },
          },
          {
            className: 'flex-25 padding-10',
            key: 'EstablishmentAmount',
            type: 'input',
            templateOptions: {
              label: 'Email',
              Placeholder: 'Example@',
              required: true,
            },
          },
        ],
      },
    ];
  }
}
