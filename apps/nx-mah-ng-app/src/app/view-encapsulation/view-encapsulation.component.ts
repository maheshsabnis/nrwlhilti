import { Component, ViewEncapsulation } from '@angular/core';
/* templateUrl: './view-encapsulation.component.html', */
@Component({
  selector: 'nx-mahng-app-view-encapsulation',
  template: `<p>I am not encapsulated and in blue
             (ViewEncapsulation.Emulated) </p>`,
  styleUrls: ['./view-encapsulation.component.css'],
  styles: ['p { color:blue}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationComponent {
  title = 'View Encapsulation in Angular : ';
}
