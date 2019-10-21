import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Door } from '../../models/doors';
import { DoorsService } from '../doors.service';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent implements OnInit {

  door: Door;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service:DoorsService,
  ) {}

  ngOnInit() {
   this.route.params.subscribe(route => {
    const id = route['id'];
    this.service.getDoor(id).subscribe(door => this.door = door)
    })
    

    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.service.getDoor(params.get('id')))
    // ).subscribe(door => this.door = door);
  }

 
  goDoors(){
    this.router.navigate(['doors'])
  }
  



}
