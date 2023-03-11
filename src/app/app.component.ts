import { Component } from '@angular/core';
import { Paths } from './models/paths.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navLinks = [{ label: 'Factions', link: Paths.FACTIONS }];
}
