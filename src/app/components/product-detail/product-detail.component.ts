import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/classes/Products';
import { apiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: any;
  pageTitle = 'Informacije o proizvodu: ';
  productId: string = '';

  constructor(private route: ActivatedRoute,
      private apiService: apiService,
      private router: Router,
      public loaderService: LoaderService) { }

  ngOnInit(): void {
    let id = String(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
    this.getProductApi(this.productId);
  }

  getProductApi(id: string): void {
    this.apiService.getProduct(id).subscribe(      
      (data: any) => {
        this.product = data.product[0];
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
