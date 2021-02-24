import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products.routing';
import { MatButtonModule } from '@angular/material/button';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductLayoutComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ProductsRoutingModule,
    MatButtonModule,
  ],
})
export class ProdutsModule {}
