import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { Products } from 'src/app/classes/Products';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private _apiService: apiService,
    public loaderService: LoaderService) { }

  page: number = 1;
  category: string = "";
  productsList: Products[] = [];
  totalProducts: number = 0;
  lastPage: number = 0;

  getProductsApi(category: string, page: number) {
    this._apiService.getProducts(category, page).subscribe(
      (data: any) => {
        this.productsList = data.products;
        this.totalProducts = data.totalProducts;
        this.lastPage = data.lastPage;
      }
    );
  }

  ngOnInit() {
    this.getProductsApi(this.category, this.page);
  }

  previousPage() {
    if(this.page > 1) {
      this.page = this.page - 1;
      this.getProductsApi(this.category, this.page);
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  nextPage() {
    if(this.page < this.lastPage) {
      this.page = this.page + 1;
      this.getProductsApi(this.category, this.page);
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}