import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Products } from "../classes/Products";

@Injectable()
export class apiService{

    constructor(private httpClient: HttpClient) {}

    productsUrl: string = "http://localhost:8000/api/products/";

    getProducts(cat:string="", page:number=1): Observable<Products[]> {
        return this.httpClient.get<Products[]>(this.productsUrl + "searchv2?cat=" + cat + "&page=" + page);
    }

    getProduct(id: string): Observable<Products> {
        return this.httpClient.get<Products>(this.productsUrl + id);
    }
}