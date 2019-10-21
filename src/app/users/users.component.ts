import { Component, OnInit} from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import {  NgForm } from '@angular/forms'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  constructor( private inventory: InventoryService) {}
  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.inventory.users.push(form.value);
    console.log(form.value);
  }
 


}
