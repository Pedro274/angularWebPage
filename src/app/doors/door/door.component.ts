import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { InventoryService } from '../../inventory.service';
import { Door } from '../../models/doors';

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
    private service: InventoryService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getDoor(id).subscribe(door => this.door = door)

    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.service.getDoor(params.get('id')))
    // ).subscribe(door => this.door = door);
  }

 
  goDoors(){
    this.router.navigate(['doors'])
  }
  



}
