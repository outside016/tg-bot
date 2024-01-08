import { Injectable } from '@angular/core';

const domain = 'https://twitch.tv/sasavot'

export enum ProductType{
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id:string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: string;
}

function addDomainToLinkAndImage(product: IProduct){
  return{
    ... product,
    image: domain + product.image,
    link: domain + product.link,
  };
}

export const products: IProduct[] = [
  {
    id: '29',
    title: 'TypeScript',
    link: 'products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Основы, типы, компилятор, классы',
    time: 'С опытом 2 недели',
    type: ProductType.Skill
  },
  {
    id: '29',
    title: 'TypeScript',
    link: 'products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Основы, типы, компилятор, классы',
    time: 'С опытом 2 недели',
    type: ProductType.Skill
  },
  {
    id: '29',
    title: 'TypeScript',
    link: 'products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Основы, типы, компилятор, классы',
    time: 'С опытом 2 недели',
    type: ProductType.Skill
  },
  {
    id: '29',
    title: 'TypeScript',
    link: 'products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Основы, типы, компилятор, классы',
    time: 'С опытом 2 недели',
    type: ProductType.Skill
  },
  {
    id: '29',
    title: 'TypeScript',
    link: 'products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Основы, типы, компилятор, классы',
    time: 'С опытом 2 недели',
    type: ProductType.Skill
  },
  {
    id: '29',
    title: 'TypeScript',
    link: 'products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Основы, типы, компилятор, классы',
    time: 'С опытом 2 недели',
    type: ProductType.Skill
  },
  {
    id: '29',
    title: 'TypeScript',
    link: 'products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Основы, типы, компилятор, классы',
    time: 'С опытом 2 недели',
    type: ProductType.Skill
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
}
