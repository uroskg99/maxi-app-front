import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { DrugaStranaComponent } from './pages/druga-strana/druga-strana.component';
import { TrecaStranaComponent } from './pages/treca-strana/treca-strana.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';

const routes: Routes = [
  { path: 'home', component: AllProductsComponent },
  { path: 'druga-strana', component: DrugaStranaComponent },
  { path: 'treca-strana', component: TrecaStranaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }