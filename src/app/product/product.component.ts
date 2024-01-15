import {Component} from '@angular/core';
import {IProduct, ProductsService} from "../services/products.service";
import {TelegramService} from "../services/telegram.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  template: `
      <div class="centered">
          <h2 class="mb">{{ product.brand }}</h2>
          <h2 class="mb">{{ product.name }}</h2>
          <br/>
          <img class="product-img" [src]="product.image" [alt]="product.name">
          <br/>
          <h2>{{ product.price }}р.</h2>
          <br/>
          <a [href]="product.link" target="_blank">Посмотреть на сайте NUW.STORE</a>
      </div>
  `
})
export class ProductComponent {

  product: IProduct;

  constructor(
    private products: ProductsService,
    private telegram: TelegramService,
    private route: ActivatedRoute,
    private Router: Router) {

    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.getById(id);

  }
}
