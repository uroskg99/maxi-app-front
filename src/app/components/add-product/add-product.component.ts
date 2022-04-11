import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  showAddProductForm = false;
  productCategories = [
    'Čokoladni proizvodi',
    'Piće, kafa i čaj',
    'Sve za kuću',
    'Kućni ljubimci',
    'Smrznuti proizvodi',
    'Lična higijena i kozmetika',
  ];

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.showAddProductForm = true;
  }

  closeModal() {
    this.showAddProductForm = false;
  }

  addNewProduct() {
  }
}
