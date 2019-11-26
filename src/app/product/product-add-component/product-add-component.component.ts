import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {ProductServiceService} from '../../product-service.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-product-add-component',
  templateUrl: './product-add-component.component.html',
  styleUrls: ['./product-add-component.component.css']
})
export class ProductAddComponentComponent implements OnInit {
  submitted = false;
  addProductForm = this.fb.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    image: '',

  });

  constructor(private fb: FormBuilder,
              private productService: ProductServiceService,
              private route: Router) {
  }

  onSubmit() {
    const productNew = this.addProductForm.value;
    this.productService.add(productNew);
    this.route.navigate(['/home']);
  }

  ngOnInit() {
  }

  get name() {
    return this.addProductForm.get('name');
  }

  get price() {
    return this.addProductForm.get('price');
  }

}
