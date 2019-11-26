import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './list/product/product.component';
import {ProductAddComponentComponent} from './product/product-add-component/product-add-component.component';
import {ProductEditComponentComponent} from './product-edit/product-edit-component/product-edit-component.component';


const routes: Routes = [
  {path: 'home', component: ProductComponent},
  {path: 'home/create', component: ProductAddComponentComponent},
  {path: 'home/:id/edit', component: ProductEditComponentComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
