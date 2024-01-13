import {Component, inject} from '@angular/core';
import {TelegramService} from "../services/telegram.service";
import {ProductsService} from "../services/products.service";
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
      <app-product-list
              title="Кроссовки"
              [products]="products.byGroup['sneakers']"
      />
      <app-product-list
              title="Ботинки"
              [products]="products.byGroup['boots']"
      />
      <app-product-list
              title="Сандали"
              [products]="products.byGroup['sandals']"
      />
      <app-product-list
              title="Сланцы"
              [products]="products.byGroup['slates']"
      />

  `,
})
export class ShopComponent {


  telegram = inject(TelegramService);

  products = inject(ProductsService);

  constructor() {
    this.telegram.MainButton.show()
    console.log(this.products.byGroup)
  }
}
