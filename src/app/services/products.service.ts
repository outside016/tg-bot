import { Injectable } from '@angular/core';
import {group} from "@angular/animations";

const domain = 'https://nuw.store/catalog/'
const domainIMG = 'https://nuw.store/upload/iblock/'

export enum ProductType{
  Sneakers = 'sneakers',
  Boots = 'boots',
  Sandals = 'sandals',
  Slates = 'Slates',
}

export enum ProductBrand{
  Mizuno = 'Mizuno',
  CamperLab = 'CamperLab',
  TenC = 'Ten C',
  Nike = 'Nike',
  Iyso = 'Iyso'
}

export interface IProduct {
  id:string;
  type: string;
  brand: string;
  name: string;
  price: string;
  link: string;
  image: string;
}

function addDomainToLinkAndImage(product: IProduct){
  return{
    ... product,
    image: domainIMG + product.image,
    link: domain + product.link,
  };
}

const products: IProduct[] = [
  {
    id: '1',
    type: ProductType.Sneakers,
    brand: ProductBrand.Iyso,
    name: 'Кроссовки ACUMIK',
    price: '34 990',
    link: 'krossovki/krossovki_acumik_3-color-temno-sinij/',
    image: 'd4c/j4v2xkghoqtjg7p2z804qn47al3gcv98.jpg'
  },
  {
    id: '2',
    type: ProductType.Boots,
    brand: ProductBrand.TenC,
    name: 'Ботинки ROCCIA VET ANTERMOIA x Diemme',
    price: '60 900',
    link: 'botinki/botinki_roccia_vet_antermoia_x_diemme-color-chernyj/',
    image: '3b7/ik0o09s82f4mzj9hnyyg1b53qi1gondd.jpg'
  },
  {
    id: '3',
    type: ProductType.Slates,
    brand: ProductBrand.Nike,
    name: 'Шлепанцы VICTORI ONE SHOWER',
    price: '4 900',
    link: 'shlepantsy/shlepantsy_victori_one_shower-color-chernyj/',
    image: 'dc2/salpkgghsmvuivpwx8cdl7ofseo1bzy1.jpg'
  },
  {
    id: '4',
    type: ProductType.Sandals,
    brand: ProductBrand.CamperLab,
    name: 'Клоги Traktori',
    price: '18 130',
    link: 'sandalii/klogi_traktori-color-chernyj/',
    image: '50e/q5m94q8q019nlbw33ek6agfxcd2huccm.jpg'
  },
  {
    id: '5',
    type: ProductType.Sneakers,
    brand: ProductBrand.Mizuno,
    name: 'Кроссовки Wave Prophecy Ls',
    price: '29 990',
    link: 'krossovki/krossovki_wave_prophecy_ls_3-color-chernyj/',
    image: '31b/dt0nlo7wwiyj0u6dluoh0pbt36n1mfhf.jpg'
  },

]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  getById(id:string){
    return this.products.find((p)=> p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if(!group[prod.type]){
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {})
  }
}
