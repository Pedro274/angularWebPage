import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DoorsComponent } from './doors/doors.component';
import { HardwaresComponent } from './hardwares/hardwares.component';
import { DoorComponent } from './doors/door/door.component';
import { InventoryService } from './services/inventory.service';
import { HardwareComponent } from './hardwares/hardware/hardware.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './users/user/user.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerComponent } from './server/server.component'
import { ServerService } from './server/server.service';
import { ServerInstanceComponent } from './server/server-instance/server-instance.component';
import { DoorsService } from './doors/doors.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DoorsComponent,
    HardwaresComponent,
    DoorComponent,
    HardwareComponent,
    UsersComponent,
    UserComponent,
    ContactsComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    ServerComponent,
    ServerInstanceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [InventoryService,ServerService,DoorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
