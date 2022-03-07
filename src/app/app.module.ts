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
      { path: 'products', component: AllProductsComponent},
      { path: 'products/:id', component: ProductDetailComponent},
      //iskoristiti canActivate za admin panel
    ]),
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    apiService,
    [AuthGuard],
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
