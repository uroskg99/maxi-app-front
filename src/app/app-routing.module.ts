import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DrugaStranaComponent } from './pages/druga-strana/druga-strana.component';
import { TrecaStranaComponent } from './pages/treca-strana/treca-strana.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';

const routes: Routes = [
  { path: '**', redirectTo: '/home' },
  { path: 'home', component: AllProductsComponent },
  { path: 'admin-login', component: DrugaStranaComponent },
  { path: 'admin-home', component: TrecaStranaComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
