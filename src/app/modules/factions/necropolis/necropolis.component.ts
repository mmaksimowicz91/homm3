import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-necropolis',
  templateUrl: './necropolis.component.html',
  styleUrls: ['./necropolis.component.scss'],
})
export class NecropolisComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
