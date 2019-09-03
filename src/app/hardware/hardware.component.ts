import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }


  goBackhome() {
    this.router.navigate([''])
  }

  
}
