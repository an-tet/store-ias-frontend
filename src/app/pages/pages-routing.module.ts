import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'perfil',
        component: ProfileComponent,
      },
      {
        path: 'productos',
        component: ProductsComponent,
      },
      {
        path: 'producto/{id}',
        component: ProductDetailComponent,
      },
      {
        path: '**',
        redirectTo: 'productos',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
