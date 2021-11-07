import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Products } from "../classes/Products";

@Injectable()
export class apiService{

    constructor(private httpClient: HttpClient) {}

    getProducts(cat:string="", page:number=1): Observable<Products[]> {
        return this.httpClient.get<Products[]>("http://localhost:8000/api/products/search?cat=" + cat + "&page=" + page);
    }
}