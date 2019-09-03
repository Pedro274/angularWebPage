import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  goHardware() {
    this.router.navigate(['hardware'])
  }


}
