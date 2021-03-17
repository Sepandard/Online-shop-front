import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/products';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  url: String = '';
  selectedProduct:any;
  constructor(private productSrv: ProductsService) {}

  ngOnInit(): void {
    let productIdArr: any[] = [];

    this.url = window.location.href;
    productIdArr = this.url.split('=');

    this.productSrv.fakeData.forEach((element) => {
      if (element.prodcutId == productIdArr[1]) {
        this.selectedProduct = element;
      }
    });
  }
}
