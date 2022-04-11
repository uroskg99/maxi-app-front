import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Products } from '../classes/Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: Products[] = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: Products[]) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: Products) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice(): number {
    console.log(this.cartItemList)
    let grandTotal = 0;
    this.cartItemList.map((a: Products) => {
      grandTotal += Number.parseInt(a.price.split(" ")[0]);
    })

    return grandTotal;
  }

  removeCartItem(index: any) {
    this.cartItemList.splice(index, 1);
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
