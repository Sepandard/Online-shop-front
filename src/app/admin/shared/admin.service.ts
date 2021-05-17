import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from 'shared/base-service.service';
import { CategoryMenu } from 'src/models/category-menu';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private baseSrv: BaseService) {}
  getOrder(order_id?: Number) {
    return this.baseSrv.getReq('orders/searchOrders', 'order_id', order_id);
  }

  getProduct(productname?: String, productid?: number) {
    return this.baseSrv.getReqByUrl(
      'product/searchProductName?productname=' +
        productname +
        '&productid=' +
        productid
    );
  }
  deleteProduct(productid: number) {
    return this.baseSrv.deleteReq(productid, 'product/deleteProduct');
  }
  onUploadImage(keyWord: string, url: string, fileData: File) {
    const formData = new FormData();
    formData.append(keyWord, fileData, fileData.name);

    return this.baseSrv.postReq(formData, url);
  }
  CategoryMenu$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public get CategoryMenu(): Observable<any[]> {
    return this.CategoryMenu$.asObservable();
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

        this.CategoryMenu$.next(CategoryArr);
      }
    });
    return CategoryArr;
  }

  postProduct(model) {
    this.baseSrv.postReq(model, 'Product/addProdcut').subscribe((data: any) => {
      console.log(data);
    });
  }
}
