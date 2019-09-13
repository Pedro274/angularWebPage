import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../inventory.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(private active: ActivatedRoute,
              private inventory: InventoryService) { }

  ngOnInit() {
      this.active.params.subscribe((route) => {
          let id = route['id'];
          this.inventory.getUser(id).subscribe((user)=> {
                this.user = user;
          })
      })
  }

}
