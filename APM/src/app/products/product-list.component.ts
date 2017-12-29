import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Products List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilterOperation(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private _productService: ProductService) {

    }

    performFilterOperation(filterString: string): IProduct[] {
        filterString = filterString.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterString) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('Initializing!');
        this._productService.getProducts()
        .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        });

        this.listFilter = '';
        console.log('Initialized product list.');
    }

    OnRatingClickedHandler(eventMessage: string): void {
        this.pageTitle += ' ' + eventMessage;
    }
}
