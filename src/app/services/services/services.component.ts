import { Component } from '@angular/core';
import { IProduct } from '../service-model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  products = [] as IProduct[];

  constructor() {
    this.products = [
      {
        productId: 1, productName: 'Solid State Drive', categoryId: 100, availableQty: 50, reorderQty: 30
      },
      {
        productId: 2, productName: 'Monitor', categoryId: 101,
        availableQty: 20, reorderQty: 10
      },
      {
        productId: 3, productName: 'LED Display Monitor', categoryId: 100,
        availableQty: 5, reorderQty: 10
      },
      {
        productId: 4, productName: 'San Disk 64 GB Pen Drive', categoryId: 105,
        availableQty: 35, reorderQty: 80
      },
      {
        productId: 5, productName: 'Think Pad Ultra Dock', categoryId: 105,
        availableQty: 25, reorderQty: 20
      },
    ];
  }

}
