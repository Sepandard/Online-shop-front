import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductLayoutComponent,
    children: [
      {
        path: 'product-list',
        component: ProductCardComponent,
      },
      {
        path: 'product-detail',
        component: ProductDetailComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/product-list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
