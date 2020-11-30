import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDisplayComponent } from './containers/list-display.component';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';


const route: Routes = [
  {
    path: '', component: ListDisplayComponent
  }
];

@NgModule({
  declarations: [ListDisplayComponent, ListProductsComponent, ListCustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)

  ]
})
export class ProductsModule { }
