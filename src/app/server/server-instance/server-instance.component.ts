import { Component, OnInit } from '@angular/core';
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
  };


}
