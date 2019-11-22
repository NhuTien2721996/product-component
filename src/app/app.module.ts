import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './list/product/product.component';
import { MenuComponent } from './core/menu/menu.component';
import { SlideComponent } from './core/slide/slide.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { ProductAddComponentComponent } from './product/product-add-component/product-add-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent,
    SlideComponent,
    ProductAddComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
