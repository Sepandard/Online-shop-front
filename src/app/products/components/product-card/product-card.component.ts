import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/configs/environment';
import { ProductsService } from '../../shared/products.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  product: any[]    
    IMAGE_URL : string = environment.IMAGE_URL

  constructor(private productSrv: ProductsService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.productSrv.getProducts());
    this.getProduct() 
  }
  onClinkToDetaliPage(item) {
    this.router.navigate([
      '/online-shop/products/product-detail',
      { Id: item.prodcutId },
    ]);
  }
  getProduct() {
    this.product = this.productSrv.getProducts();
  }
}
