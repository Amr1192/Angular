import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component'
import { FirstSectionComponent } from './components/first_section/first_section.component'
@Component({
  selector: 'app-root',
  imports: [NavbarComponent,CarouselComponent,FirstSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
}
