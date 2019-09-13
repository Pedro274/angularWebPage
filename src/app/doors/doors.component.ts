import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';
import { Door } from '../models/doors'


@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent implements OnInit {

  doors: Door[] = [];
  doorName: string;


  constructor(private router:Router, private inventory:InventoryService) { }

  ngOnInit() {
    this.doors = this.inventory.doors;  
  } 


  goHardware() {
    this.router.navigate(['hardwares'])
  }


}
