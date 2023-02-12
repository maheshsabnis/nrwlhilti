import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MainlibComponent } from './mainlib/mainlib.component';

export const utilityRoutes: Route[] = [
  {path: '', component: MainlibComponent,
 children:[
  {path: 'home',   component: HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent}
 ]}
];
