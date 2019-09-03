import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoorsComponent } from './doors/doors.component';
import { HardwareComponent } from './hardware/hardware.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doors', component: DoorsComponent },
  { path: 'hardware', component: HardwareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
