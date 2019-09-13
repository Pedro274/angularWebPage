import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InventoryService } from '../../inventory.service';
import { Hardware } from '../../models/hardware';




@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent implements OnInit {

  hardware: Hardware;

  constructor( 
               private route:ActivatedRoute,
               private service:InventoryService) {}

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.service.getHardware(id).subscribe(hardware => this.hardware = hardware);
    this.route.params.subscribe((param:Params)=>{ 
      let id = param['id'];
      this.service.getHardware(id).subscribe(hardware => this.hardware = hardware);
    })
  }





 





}
