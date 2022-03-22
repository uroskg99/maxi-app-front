import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail-admin',
  templateUrl: './product-detail-admin.component.html',
  styleUrls: ['./product-detail-admin.component.css']
})
export class ProductDetailAdminComponent implements OnInit {

  @Input() product: any;
  pageTitle = 'Informacije o proizvodu: ';
  productId: string = '';
  showProductForm: boolean = false;
  formProduct: FormGroup;
  submitted: boolean = false;
  updateData: any;
  selected: string = '';
  selectedPicture: string;

  categories = [
    {name: '', n:0},
    {name: "Čokoladni proizvodi", n:1},
    {name: "Piće, kafa i čaj", n:2},
    {name: "Sve za kuću", n:3},
    {name: "Kućni ljubimci", n:4},
    {name: "Smrznuti proizvodi", n:5},
    {name: "Lična higijena i kozmetika", n:6},
  ];

  constructor(private route: ActivatedRoute,
      private apiService: apiService,
      private router: Router,
      public loaderService: LoaderService,
      private formBuilder: FormBuilder,
      private toastr: ToastrService) { }

  createForm() {
    this.formProduct = this.formBuilder.group({
      name: [null, Validators.required],
      category: [],
      picture: [],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      id: this.productId
    })
  }

  ngOnInit(): void {
    let id = String(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
    this.getProductApi(this.productId);
    this.createForm();
  }

  getProductApi(id: string): void {
    this.apiService.getProduct(id).subscribe(      
      (data: any) => {
        this.product = data.product[0];
        this.selectedPicture = this.product.picture;
        console.log(this.selectedPicture);
    });
  }

  onBack(): void {
    this.router.navigate(['/admin-page']);
  }

  editProductForm(): void {
    this.showProductForm = true;
    console.log(this.product.category)
  }

  closeEditForm(): void {
    this.showProductForm = false;
  }

  updateProduct(): void {
    if(this.formProduct.get('category')?.value == '')
      this.formProduct.get('category')?.setValue(this.product.category);

    if(this.formProduct.get('picture')?.value == null)
      this.formProduct.get('picture')?.setValue(this.selectedPicture);

    console.log( this.formProduct.get('picture'));

    this.submitted = true;
    if (this.formProduct.invalid) {
      return;
    }
  
    const data = {
      "_id": this.productId,
      "category":this.formProduct.get('category')?.value,
      "picture": this.formProduct.get('picture')?.value,
      "price": this.formProduct.get('price')?.value,
      "quantity": this.formProduct.get('quantity')?.value,
      "name": this.formProduct.get('name')?.value
    };

    this.apiService.updateProduct(data).subscribe((res : any) => {
      this.updateData = res;
      console.log(res);
      if(this.updateData.status === 1) {
        this.toastr.success(JSON.stringify(this.updateData.message), JSON.stringify(this.updateData.code), {
          timeOut: 2000,
          progressBar: true
        });
        this.showProductForm = false;
        this.formProduct.reset();
      } else {
        this.toastr.error(JSON.stringify(this.updateData.message), JSON.stringify(this.updateData.code), {
          timeOut: 2000,
          progressBar: true
        });
        this.showProductForm = false;
        this.formProduct.reset();
      }
    });
  }

  onFileChange(event: any) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formProduct.patchValue({
        fileSource: file
      });
    }
    else 
      this.formProduct.patchValue({
        fileSource: this.product.picture
      });
  }

  delete() {
    
    const data = {
      "_id" : this.productId
    };

    this.apiService.deleteProduct(data).subscribe((res : any) => {
      alert()
      this.updateData = res;
      console.log(res);
      if(this.updateData.status === 1) {
        this.toastr.success(JSON.stringify(this.updateData.message), JSON.stringify(this.updateData.code), {
          timeOut: 2000,
          progressBar: true,
        });
        this.showProductForm = false;
        this.formProduct.reset();
        setTimeout(() => {
          alert("Uspesno ste obrisali proizvod!")
          this.router.navigate(['/admin-home']);
        }, 2000);
      } else {
        this.toastr.error(JSON.stringify(this.updateData.message), JSON.stringify(this.updateData.code), {
          timeOut: 2000,
          progressBar: true
        });
        this.showProductForm = false;
        this.formProduct.reset();
      }
    });
  }

}