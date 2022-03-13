import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin: any;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("token")) {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

}
