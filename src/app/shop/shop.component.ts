import {Component, inject, Injectable} from '@angular/core';
import {TelegramService} from "../services/telegram.service";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  template: `<h1>main shop</h1>`
})
export class ShopComponent {

  telegram = inject(TelegramService);

  constructor() {
    this.telegram.MainButton.show()
}


}
