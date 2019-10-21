import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Door } from '../models/doors'
import { DoorsService } from './doors.service';


@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent implements OnInit {

  doors: Door[] = [];
  doorName: string;


  constructor(private router:Router, private inventory:DoorsService) { }

  ngOnInit() {
    this.doors = this.inventory.doors;  
    console.log(this.doors)
  } 


  goHardware() {
    this.router.navigate(['hardwares'])
  }


}
