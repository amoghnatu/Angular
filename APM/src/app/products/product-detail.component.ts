import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute,
  private router: Router,
  private _productService: ProductService) { }

  product: IProduct;
  pageTitle: string;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle = 'Product Detail - ' + `${id}`;
    this._productService.getProductById(id).subscribe(product => this.product = product);
  }

  OnBackClick(): void {
    this.router.navigate(['/products']);
  }

}
