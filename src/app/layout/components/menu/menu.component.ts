import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/shared/products.service';
import { CategoryMenu } from 'src/models/category-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private productSrv:ProductsService) { }
  categoryArr :any[]
  nickname:String
  
  ngOnInit(): void {
    this.nickname=localStorage.getItem('nickName')
    this.categoryArr = this.productSrv.getCategoryMenu();
  }
  getCategoryMenu(){
    
    
  }
  onLogout(){
    localStorage.setItem('nickName',null)
    localStorage.setItem('token',null)
  }
 
}
