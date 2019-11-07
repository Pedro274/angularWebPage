import { Component, OnInit} from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import {  NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  constructor( private inventory: InventoryService,
               private router: Router,
               private route: ActivatedRoute) {}
  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.inventory.users.push(form.value);
    console.log(form.value);
  }
  
  reloadPage() {
    this.router.navigate(['doors'], {relativeTo: this.route }) // this will add doors to the currently activated route
  }


}
