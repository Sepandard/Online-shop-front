import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { OrderMangerComponent } from './components/order-manger/order-manger.component';
import { ProductMangerComponent } from './components/product-manger/product-manger.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'order-manger',
        component: OrderMangerComponent,
      },
      {
        path: 'product-manger',
        component: ProductMangerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
