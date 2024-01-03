import { Routes } from '@angular/router';
import {ShopComponent} from "./shop/shop.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import {ProductComponent} from "./product/product.component";

export const routes: Routes = [
  {path: '', component: ShopComponent, pathMatch: "full"},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'product/:id', component: ProductComponent},
];
