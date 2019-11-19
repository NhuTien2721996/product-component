import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../../IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
  }

  public products: IProduct[] = [
    {
      id: 1,
      name: 'iphone7',
      price: 3000,
      image: 'assets/ip7.png'
    },
    {
      id: 2,
      name: 'iphone7+',
      price: 3000,
      image: 'assets/ip7.png'
    },
    {
      id: 3,
      name: 'iphone8',
      price: 3000,
      image: 'assets/ip7.png'
    },
  ];
  widthImg = 100;
  showImage = true;
  productFilter: IProduct[] = [];

  showHide() {
    this.showImage = !this.showImage;
  }

  filter(event) {
    const keyword = event.target.value;
    console.log(keyword);
    this.productFilter = (keyword) ? this.search(keyword) : this.products;
  }

  search(keyword) {
    return this.products.filter(
      product => product.name.toLowerCase().indexOf(keyword) !== -1
    );
  }

  delete(id: number) {
    const confirmResult = confirm('Bạn có muốn xóa không?');
    if (confirmResult) {
      this.products.splice(id, 1);
    }
  }
  ngOnInit() {
    this.productFilter = this.products;
  }
}
