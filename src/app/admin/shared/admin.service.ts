import { Injectable } from '@angular/core';
import { BaseService } from 'shared/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private baseSrv:BaseService) { }
  getOrder(order_id?:Number){
    return this.baseSrv.getReq("orders/searchOrders","order_id",order_id)
  }

}
