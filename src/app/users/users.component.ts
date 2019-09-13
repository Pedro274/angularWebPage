import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { User } from '../models/user';
import {  NgForm } from '@angular/forms'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  user: User;
  constructor( private inventory: InventoryService) {
    this.user = {
      name: '',
      id: '',
    }
  }
  ngOnInit() {}

  onSubmit(form: NgForm) {
    if(this.user.name !== '' && this.user.id !== '') {
      this.inventory.users.push(form.value)
    };
    console.log(form.value);
  }
 


}
