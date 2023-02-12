import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { utilityRoutes } from './lib.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainlibComponent } from './mainlib/mainlib.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(utilityRoutes)
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MainlibComponent,
  ],
})
export class UtilityModule {}
