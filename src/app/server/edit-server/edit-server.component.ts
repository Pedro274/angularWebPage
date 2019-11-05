import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {

  allowEdit:boolean = true;

  constructor(private route: ActivatedRoute,
              private service: ServerService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((param: Params) => {
      this.allowEdit = param['allowEdit'] === '1' ? true : false;
    })
  }

  changeStatus(status){
    
    
  }

  






}
