import { Injectable } from '@angular/core';
import { Door } from './models/doors'
import { of, Observable } from 'rxjs';
import { Hardware } from './models/hardware';
import { User } from './models/user'


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  users: User[] = [{name:'Pedro', id:'h4i3'}];

  doors: Door[] = [
      { id: 'h31', name:'Chayane', height: '2/4', width: '6/8', imageUrl: 'https://www.homesurplus.com/wp-content/uploads/2018/02/Cheyenne_DSF32_900_x_900.jpg'},
      { id: 'h32', name:'2PNSQ'  , height: '2/6', width: '7/11', imageUrl: 'http://store.bbwood.com/images/products/display/2pCom.gif'},
      { id: 'h32', name:'Cremona'  , height: '2/2', width: '6/7', imageUrl: 'http://www.lyndendoor.com/wp-content/uploads/2015/11/cremona2.jpg'},
  ];

  hardwares: Hardware[] = [
      { name: 'Cabinet Knob', id: 'li78', size: 3, imageUrl: 'https://d3o372dlsg9lxo.cloudfront.net/catalog/products/c100146/images/grid/5ccb3b3c2213936c9afde025/C2586_BK7_170808_02_C1452.jpg' },
      { name: 'Williamsburg', id: 'hy34', size: 5,imageUrl: 'https://images.homedepot-static.com/productImages/aadd91f3-7229-4179-8923-12660f8bb228/svn/liberty-cabinet-knobs-p35051c-sn-u6-64_1000.jpg'},
      { name: 'Poty', id: 'fd54', size: 6, imageUrl: 'https://images.homedepot-static.com/productImages/a2602122-8407-454d-b77e-521fdd8af080/svn/liberty-drawer-pulls-p37280c-cz-cp-64_1000.jpg'},
      { name: 'Domed', id: 'fd55', size: 6, imageUrl: 'https://images.homedepot-static.com/productImages/a2602122-8407-454d-b77e-521fdd8af080/svn/liberty-drawer-pulls-p37280c-cz-cp-64_1000.jpg'},
  ];

  

  getDoor(id: string): Observable<Door> {
    return of(this.doors.find(e => e.id === id));
  };

  getHardware(id:string): Observable<Hardware>{
    return of(this.hardwares.find(e => e.id === id))
  };

  getUser(id:string) :Observable<User> {
    return of(this.users.find(e => e.id === id ))
  }

}
