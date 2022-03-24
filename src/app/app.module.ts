import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { apiService } from './services/api.service';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { DrugaStranaComponent } from './pages/druga-strana/druga-strana.component';
import { TrecaStranaComponent } from './pages/treca-strana/treca-strana.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterceptorService } from './loader/interceptor.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProductDetailAdminComponent } from './components/product-detail-admin/product-detail-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    HeaderComponent,
    AllProductsComponent,
    DrugaStranaComponent,
    TrecaStranaComponent,
    ProductCardComponent,
    ProductDetailComponent,
    HomeSliderComponent,
    AddProductComponent,
    ProductDetailAdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AllProductsComponent },
      { path: 'admin-login', component: DrugaStranaComponent },
      { path: 'admin-home', component: TrecaStranaComponent, canActivate: [AuthGuard] },
      { path: 'admin-home/:id', component: ProductDetailAdminComponent},
      { path: 'products', component: AllProductsComponent},
      { path: 'products/:id', component: ProductDetailComponent},
    ]),
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [
    apiService,
    [AuthGuard],
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
