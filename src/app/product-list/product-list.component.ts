import {Component, Input} from '@angular/core';
import {IProduct} from "../services/products.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  template: `
      <h1>{{ title }}</h1>
      <ul class="products">
          @for (product of products; track product.id) {
              <li class="product-item" [routerLink]="'product/' + product.id">
                  <div class="product-image">
                      <img class="product-img" [src]="product.image" [alt]="product.name"/>
                  </div>
                  <div class="product-info">
                      <h3>{{ product.brand }}</h3>
                      <p class="hint">{{product.name}}</p>
                      <h2 class="hint">{{product.price}} р.</h2>
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
