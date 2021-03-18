import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ProductsService } from 'src/app/products/shared/products.service';
import { CategoryMenu } from 'src/models/category-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl(''),
  });
  importedFilePatternModel: any = {};
  importedFilePatternConfig: FormlyFieldConfig[];
  constructor( private productSrv:ProductsService) { }
  categoryArr :any[]
  nickname:String
  
  ngOnInit(): void {
    this.nickname=localStorage.getItem('nickName')
    this.categoryArr = this.productSrv.getCategoryMenu();
    this.initsearchFrom()
  }
  getCategoryMenu(){
    
    
  }
  onLogout(){
    localStorage.setItem('nickName',null)
    localStorage.setItem('token',null)
  }
  onSubmitImportedFilePattern(){

    this.productSrv.getProducts(this.searchForm.value.search)
  }
 initsearchFrom(){
   
   
   this.productSrv.getProducts();
   this.importedFilePatternConfig = [
     {
       fieldGroupClassName: 'flex-container',
       fieldGroup: [
         {
           className: 'flex-25 padding-10 ',
           key: 'SalaryFactorId',
           type: 'input',
           templateOptions: {
             label: 'Search',
             required: true,
           },
         },
       ],
     },
   ];
 }
}
