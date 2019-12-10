import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageDoctorComponent } from './home-page-doctor/home-page-doctor.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomePageDoctorComponent,
    PatientListComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
