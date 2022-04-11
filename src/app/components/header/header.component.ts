import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin: any;
  public totalItem : number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")) {
      this.admin = true;
    } else {
      this.admin = false;
    }

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
}
