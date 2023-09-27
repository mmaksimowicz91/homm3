import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inferno',
  templateUrl: './inferno.component.html',
  styleUrls: ['./inferno.component.scss'],
})
export class InfernoComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
