import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products.routing';
import { MatButtonModule } from '@angular/material/button';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MenuComponent } from '../layout/components/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductLayoutComponent,
    ProductListComponent,
    ProductDetailComponent,
    MenuComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        {
          name: 'minlength',
          message: 'your password must be more than 8 char',
        },
      ],
    }),
    FormlyMaterialModule,
  ],
})
export class ProdutsModule {}
