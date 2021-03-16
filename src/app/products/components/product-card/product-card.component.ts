import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  product: any[] = this.productSrv.fakeData;

  constructor(private productSrv: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.productSrv.getProducts()
  }
  onClinkToDetaliPage(item) {
    this.router.navigate([
      '/online-shop/products/product-detail',
      { Id: item.prodcutId },
    ]);
  }
}
