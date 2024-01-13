import {Component, Input} from '@angular/core';
import {IProduct} from "../services/products.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  template: `
      <h2>{{ title }}</h2>
      <ul class="products">
          @for (product of products; track product.id) {
              <li class="product-item">
                  <div class="product-image">
                      <img [src]="product.image" [alt]="product.name"/>
                  </div>
                  <div class="product-info">
                      <h3>{{ product.brand }}</h3>
                      <p class="hint">{{product.name}}</p>
                      <p class="hint">{{product.type}}</p>
                      <p class="hint">{{product.price | }}</p>
                  </div>
              </li>
          }
      </ul>
  `,
})
export class ProductListComponent {
  @Input() title: string;
  @Input() products: IProduct[];

}
