import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../Auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../products/produts.module').then((m) => m.ProdutsModule),
      
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class LayoutRoutingModule {}
