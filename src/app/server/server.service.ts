import { Injectable, EventEmitter } from '@angular/core';
import { Server } from './models/server'
import { Observable,of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }
    serverChanged = new EventEmitter<Server[]>();
    servers:Server[] = [{name: 'Pedro', status: 'Active'}];

    addServer(server:Server) {
      this.servers.push(server);
    }
    
    changeStatusOfUser(status, serverId) {
      this.servers[serverId].status = status;
    }

    findIndexOfItemSelected(name):Observable<number>{
     return of(this.servers.findIndex(e => e.name === name))
    }
  











}
