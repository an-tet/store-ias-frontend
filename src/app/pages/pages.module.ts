import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [PagesComponent, ProfileComponent, ProductsComponent, ProductDetailComponent],
  imports: [CommonModule, PagesRoutingModule],
  exports: [PagesComponent],
})
export class PagesModule {}
