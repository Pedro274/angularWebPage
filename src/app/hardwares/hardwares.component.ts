import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hardware } from '../models/hardware';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-hardwares',
  templateUrl: './hardwares.component.html',
  styleUrls: ['./hardwares.component.scss']
})
export class HardwaresComponent implements OnInit {

  hardwares: Hardware[] = [];

  constructor( private router:Router,
               private route:ActivatedRoute,
               private inventory:InventoryService) {}

  ngOnInit() {
    this.hardwares = this.inventory.hardwares;
  }


  goBackHome() {
    this.router.navigate([''],{relativeTo:this.route})
  }

 


}
