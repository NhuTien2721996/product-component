import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../../product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-product-edit-component',
  templateUrl: './product-edit-component.component.html',
  styleUrls: ['./product-edit-component.component.css']
})
export class ProductEditComponentComponent implements OnInit {
  EditProductForm: FormGroup;
  index = +this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute,
              private productService: ProductServiceService,
              private fb: FormBuilder,
              private router: Router) {
  }


  ngOnInit() {
    const product = this.productService.findById(this.index);
    this.EditProductForm = this.fb.group({
      name: [[product.name], [Validators.required]],
      price: [[product.price], [Validators.required]],
    });
  }

  onSubmit() {
    this.productService.update(this.EditProductForm.value, this.index);
    this.router.navigate(['/home']);
  }

  get name() {
    return this.EditProductForm.get('name');
  }

  get price() {
    return this.EditProductForm.get('price');
  }

}
