import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent implements OnInit {

  constructor( private router:Router,
               private route:ActivatedRoute,) { }

  ngOnInit() {
  }


  goBackhome() {
    this.router.navigate([''],{relativeTo:this.route})
  }


}
