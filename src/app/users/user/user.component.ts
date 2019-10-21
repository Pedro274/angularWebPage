import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private inventory: InventoryService) {}

  ngOnInit() {
    this.users = this.inventory.users
  }

  deleteUser(userId) {
    this.inventory.getUserIndex(userId).subscribe(userIndex => this.users.splice(userIndex,1))
  }

}
