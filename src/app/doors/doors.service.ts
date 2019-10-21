import { Injectable } from '@angular/core';
import { Door } from '../models/doors';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {

  constructor() { }

  doors: Door[] = [
    { id: 'h31', name:'Chayane', height: '2/4', width: '6/8', imageUrl: 'https://www.homesurplus.com/wp-content/uploads/2018/02/Cheyenne_DSF32_900_x_900.jpg', edit:"allow"},
    { id: 'h32', name:'2PNSQ'  , height: '2/6', width: '7/11', imageUrl: 'http://store.bbwood.com/images/products/display/2pCom.gif', edit:"not-allow"},
    { id: 'h33', name:'Cremona'  , height: '2/2', width: '6/7', imageUrl: 'http://www.lyndendoor.com/wp-content/uploads/2015/11/cremona2.jpg',edit:"allow"},
];
getDoor(id: string): Observable<Door> {
  return of(this.doors.find(e => e.id === id));
};
}
