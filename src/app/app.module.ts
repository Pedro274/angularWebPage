import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DoorsComponent } from './doors/doors.component';
import { HardwareComponent } from './hardware/hardware.component';
import { DoorComponent } from './doors/door/door.component';
import {InventoryService} from './inventory.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DoorsComponent,
    HardwareComponent,
    DoorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
