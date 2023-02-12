import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';

const routes: Routes = [
  { path: '', component: NxWelcomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'viewencapsulation', component:ViewEncapsulationComponent},
  // {path:'lazy',
  // loadChildren:()=>import(`./../../../../libs/utility/src/index`)
  // .then(m=>m.UtilityModule)}

  {
    path: 'lazy',
    loadChildren: () =>
      import(`@nx-mahng-app/utility`).then((m) => m.UtilityModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    EmployeeComponent,
    ViewEncapsulationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
