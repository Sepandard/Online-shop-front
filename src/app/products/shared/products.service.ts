import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from 'shared/base-service.service';
import { CategoryMenu } from 'src/models/category-menu';
import { Product } from 'src/models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  CategoryItem: CategoryMenu;
  Product: Product;
  constructor(private baseSrv: BaseService) {}
  CategoryMenu$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public get CategoryMenu(): Observable<any[]> {
    return this.CategoryMenu$.asObservable();
  } 
  Products$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public get Products(): Observable<any[]> {
    return this.Products$.asObservable();
  }
  getcategory(model?: String) {
    return this.baseSrv.getReq('product/searchProductCategory', model);
  }

  getCategoryMenu() {
    let CategoryArr = [];
    this.getcategory().subscribe((res: any) => {
      if (res.data[0].ProductCategory) {
        res.data[0].ProductCategory.forEach((element) => {
          let item = new CategoryMenu(element);
          CategoryArr.push(item);
        });
        console.log(CategoryArr);
        this.CategoryMenu$.next(CategoryArr);
      }
    });
    return CategoryArr;
  }
  getProducts(productname?){
    let productArr :any[]=[]
    this.baseSrv.getReq('product/searchProduct',"productname",productname).subscribe((res:any)=>{
      console.log(res.data[0].products);
      res.data[0].products.forEach((element) => {
        let product = new Product(element);
        productArr.push(product);
      });
  
    })
    console.log(productArr);
    
  }

  fakeData = [
    {
      prodcutId: 1,
      productName: 'ssss',
      descriptionProduct: 'sasadasd',
      ProductImageUrl:
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      priceProduct: 2000,
      categoryProduct: 'asdasd',
    },
    {
      prodcutId: 1,
      productName: 'ssss',
      descriptionProduct: 'sasadasd',
      ProductImageUrl:
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      priceProduct: 2000,
      categoryProduct: 'asdasd',
    },
    {
      prodcutId: 1,
      productName: 'ssss',
      descriptionProduct: 'sasadasd',
      ProductImageUrl:
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      priceProduct: 2000,
      categoryProduct: 'asdasd',
    },
    {
      prodcutId: 1,
      productName: 'ssss',
      descriptionProduct: 'sasadasd',
      ProductImageUrl:
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      priceProduct: 2000,
      categoryProduct: 'asdasd',
    },
    {
      prodcutId: 1,
      productName: 'ssss',
      descriptionProduct: 'sasadasd',
      ProductImageUrl:
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      priceProduct: 2000,
      categoryProduct: 'asdasd',
    },
    {
      prodcutId: 1,
      productName: 'ssss',
      descriptionProduct: 'sasadasd',
      ProductImageUrl:
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      priceProduct: 2000,
      categoryProduct: 'asdasd',
    },
    {
      prodcutId: 1,
      productName: 'ssss',
      descriptionProduct: 'sasadasd',
      ProductImageUrl:
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      priceProduct: 2000,
      categoryProduct: 'asdasd',
    },
    {
      prodcutId: 1,
      productName: 'ssss',
      descriptionProduct: 'sasadasd',
      ProductImageUrl:
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      priceProduct: 2000,
      categoryProduct: 'asdasd',
    },
  ];
}
