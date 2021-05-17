import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ProductsService } from 'src/app/products/shared/products.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
  profileEditFormConfig: FormlyFieldConfig[];
  profileEditForm = new FormGroup({});
  @Input() profileEditFormModel: any = {};
  @Output() tabIndex = new EventEmitter<any>();

  constructor(private productSrv: ProductsService) {}

  ngOnInit(): void {
    this.initForm();
  }
  onSubmit() {
    this.productSrv.putPersonal(this.profileEditFormModel);
  }
  onRestForm() {
    this.tabIndex.emit(0);
  }
  initForm() {
    this.profileEditFormConfig = [
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
          {
            className: 'flex-100 padding-10',
            key: 'user_nickname',
            type: 'input',

            templateOptions: {
              label: 'name',
              Placeholder: 'Password',
              required: true,
            },
          },
          {
            className: 'flex-100 padding-10',
            key: 'user_gender',
            type: 'radio',
            templateOptions: {
              type: 'radio',
              label: 'Gender',
              required: true,
              name: 'gender',
              options: [
                { value: 'Male', key: 1 },
                { value: 'Female', key: 2 },
                { value: 'Other', key: 3 },
              ],
            },
          },
        ],
      },
    ];
  }
}
