import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-castle',
  templateUrl: './castle.component.html',
  styleUrls: ['./castle.component.scss'],
})
export class CastleComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
