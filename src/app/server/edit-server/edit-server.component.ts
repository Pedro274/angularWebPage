import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {

  allowEdit:boolean = true;
  id:string;

  constructor(private activeRoute: ActivatedRoute,
              private service: ServerService,
              private route: Router
              ) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((param: Params) => {
      this.allowEdit = param['allowEdit'] === '1' ? true : false;
    })
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    })
  }
  
  changeStatus(status:string) {
    this.service.findIndexOfItemSelected(this.id).subscribe(serverIndex => {
      this.service.changeStatusOfUser(status,serverIndex);
    })
  }
  
  Delete() {
    this.service.removeServer(this.id);
    this.route.navigate(['server']); // ask Ormani about this 
  }






}
