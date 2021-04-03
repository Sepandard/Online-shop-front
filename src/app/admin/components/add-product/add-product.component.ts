import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductform = new FormGroup({});
  addProductformModel: any = {};
  addProductformConfig: FormlyFieldConfig[];
  constructor() {}

  ngOnInit(): void {
    this.initForm() 
  }
  onSubmit() {
    console.log(this.addProductformModel);
  }
  onRestForm(){
    this.addProductform.reset()
  }
  initForm() {
    this.addProductformConfig = [
      {
        fieldGroupClassName: 'flex-container',
        fieldGroup: [
          {
            className: 'flex-50  padding-10 ',
            key: 'product name',
            type: 'input',
            templateOptions: {
              label: 'Product name',
              required: true,
            },
          },
          {
            className: 'flex-50  padding-10 ',
            key: 'productprice',
            type: 'input',
            templateOptions: {
              label: 'Product price',
              required: true,
            },
          },
      
          {
            className: 'flex-50  padding-10 ',
            key: 'productcategoryid',
            type: 'input',
            templateOptions: {
              label: 'Product category ',
              required: true,
            },
          },
          {
            className: 'flex-50  padding-10 ',
            key: 'productname',
            type: 'input',
            templateOptions: {
              label: 'Product name',
              required: true,
            },
          },
          {
            className: 'flex-50  padding-10 ',
            key: 'productdescription',
            type: 'textarea',
            templateOptions: {
              label: 'Product description',
              required: true,
              rows:3
            },
          },
        ],
      },
    ];
  }
}
