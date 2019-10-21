import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(private active: ActivatedRoute,
              private router: Router,
              private inventory: InventoryService) { }

  ngOnInit() {
      this.active.params.subscribe((route) => {
          let id = route['id'];
          this.inventory.getUser(id)
          .subscribe((user)=> {
            if(!user) {
              this.router.navigateByUrl('users');
            } else {
              this.user = user;
            }
          }, err => console.error(err))
      })
  }

}
