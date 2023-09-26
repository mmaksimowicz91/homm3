import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.scss'],
})
export class FactionsComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
