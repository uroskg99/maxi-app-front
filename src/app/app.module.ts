import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { apiService } from './services/api.service';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DrugaStranaComponent } from './pages/druga-strana/druga-strana.component';
import { TrecaStranaComponent } from './pages/treca-strana/treca-strana.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    HeaderComponent,
    AllProductsComponent,
    DrugaStranaComponent,
    TrecaStranaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: AllProductsComponent },
      { path: 'druga-strana', component: DrugaStranaComponent},
      { path: 'treca-strana', component: TrecaStranaComponent }
    ])
  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
