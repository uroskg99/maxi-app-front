import { Component, ViewChild, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { Products } from 'src/app/classes/Products';
import { LoaderService } from 'src/app/loader/loader.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {

  constructor(
    private _apiService: apiService,
    public loaderService: LoaderService,
    private _adminsService: AdminsService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  page: number = 1;
  category: string = '';
  productsList: Products[] = [];
  totalProducts: number = 0;
  lastPage: number = 0;
  selectedCategories: any[] = [];
  showFilters: boolean = false;

  form: FormGroup;
  submitted = false;
  loginData: any;
  token: any;
  adminLogged: any;

  categories = [
    {name: "Čokoladni proizvodi", checked: false, n:0},
    {name: "Piće, kafa i čaj", checked: false, n:1},
    {name: "Sve za kuću", checked: false, n:2},
    {name: "Kućni ljubimci", checked: false, n:3},
    {name: "Smrznuti proizvodi", checked: false, n:4},
    {name: "Lična higijena i kozmetika", checked: false, n:5},
  ];

  getProductsApi(category: string, page: number) {
    this._apiService.getProducts(category, page).subscribe((data: any) => {
      this.productsList = data.products;
      this.totalProducts = data.totalProducts;
      this.lastPage = data.lastPage;
    });
  }

  getSelectedCategories() {
    const selectedCategories = this.categories.filter(cat => cat.checked).map(cat => cat.name);
    return selectedCategories;
  }

  checkedCategory(e: any, category: any) {
    this.categories[category.n].checked = !this.categories[category.n].checked;
    this.selectedCategories = this.getSelectedCategories();
    this.category = '';
    for (let index = 0; index < this.selectedCategories.length; index++) {
      this.category += this.selectedCategories[index] + ':';
    }
    this.category = this.category.slice(0, -1);
    this.getProductsApi(this.category, this.page);
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.getProductsApi(this.category, this.page);
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  nextPage() {
    if (this.page < this.lastPage) {
      this.page = this.page + 1;
      this.getProductsApi(this.category, this.page);
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngOnInit() {
    this.getProductsApi(this.category, this.page);
    if(localStorage.getItem('token') != null) {
      this.adminLogged = true;
    }
  }
}
