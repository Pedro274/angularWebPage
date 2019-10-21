import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoorsComponent } from './doors/doors.component';
import { HardwaresComponent } from './hardwares/hardwares.component';
import { DoorComponent } from './doors/door/door.component';
import { HardwareComponent } from './hardwares/hardware/hardware.component'
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerComponent } from './server/server.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path:'contacts', component: ContactsComponent},
  { path:'server', component: ServerComponent},
  { path: 'doors', component: DoorsComponent},
  { path: 'doors/:id', component: DoorComponent},
  { path: 'users', component: UsersComponent, children:[
    {path: ':id', component:UserDetailsComponent},
  ]},
  { path: 'hardwares', component: HardwaresComponent, children:[
    { path: ':id', component: HardwareComponent },
  ]},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo:'/not-found'},
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
