import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dwellings',
  templateUrl: './dwellings.component.html',
  styleUrls: ['./dwellings.component.scss'],
})
export class DwellingsComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
