import { Component, OnInit, Output } from '@angular/core';
import { ServerService } from '../server.service';
import { Server} from '../models/server';


@Component({
  selector: 'app-server-instance',
  templateUrl: './server-instance.component.html',
  styleUrls: ['./server-instance.component.scss']
})
export class ServerInstanceComponent implements OnInit {

  constructor(private service:ServerService) { }
  servers:Server[] = [];
 
  ngOnInit() {
    this.servers = this.service.servers;
    this.service.serverChanged.subscribe(upDateServers => console.log(upDateServers))
  };

  changeStatus(status:string, serverId:number ) {
      this.service.changeStatusOfUser(status, serverId)
  };

  Delete(name:string) {
    this.service.findIndexOfItemSelected(name).subscribe(index => {
      this.servers.splice(index,1)
    })
  }
}
