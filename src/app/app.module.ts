import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { apiService } from './services/api.service';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
//import { AppRoutingModule } from './app-routing.module';
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
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: AllProductsComponent },
      { path: 'druga-strana', component: DrugaStranaComponent },
      { path: 'treca-strana', component: TrecaStranaComponent },
      { path: 'products', component: AllProductsComponent},
      { path: 'products/:id', component: ProductDetailComponent}
    ]),
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    apiService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
