import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../../IProduct';
import {ProductServiceService} from '../../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProduct = this.productService.getAll();

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit() {
  }

  delete(id) {
    this.productService.delete(id);
  }
}
