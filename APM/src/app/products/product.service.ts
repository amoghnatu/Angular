import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class ProductService {
    productServiceUrl = './api/products/products.json';
    productsList: IProduct[];
    constructor(private _httpClient: HttpClient) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this.productServiceUrl);
    }

    getProductById(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }
}
