import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  //   {
  //     path: '',
  //     loadChildren: () =>
  //       import('../libs/libs/admin-layout/admin-layout.module').then(
  //         (m) => m.AdminLayoutModule
  //       ),
  //   }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
