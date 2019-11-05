import { Component, OnInit, Output } from '@angular/core';
import { ServerService } from './server.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  constructor(private service:ServerService) { }
 
  ngOnInit() {
  }
  onSubmit(server: NgForm){
    this.service.addServer(server.value); 
    console.log(server.value);
  }
}
