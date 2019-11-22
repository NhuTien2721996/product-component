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
      name: 'iphone 7',
      price: '9.300.000đ',
      image: 'assets/ip7.png'
    },
    {
      id: 2,
      name: 'iphone XsMax',
      price: '38.000.000đ',
      image: 'assets/xsMax.png'
    },
    {
      id: 3,
      name: 'iphone 8',
      price: '14.600.000đ',
      image: 'assets/8.png'
    },
    {
      id: 4,
      name: 'Samsung Galaxy Note 10 Plus',
      price: '16,490,000đ',
      image: 'assets/thumb_Note10_plus-1.jpg'
    },
    {
      id: 5,
      name: 'Samsung Galaxy A80',
      price: '11,990,000đ',
      image: 'assets/thumb_A80-1.jpg'
    },
    {
      id: 6,
      name: 'Xiaomi Mi CC9 Pro ',
      price: '10,490,000đ',
      image: 'assets/thumb_CC9pro-1.jpg'
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
  onSubmit(){

  }
  ngOnInit() {
    this.productFilter = this.products;
  }
}
