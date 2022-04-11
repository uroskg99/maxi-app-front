import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/classes/Products';
import { apiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  public filterCategory : any
  searchKey:string ="";
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
