import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conflux',
  templateUrl: './conflux.component.html',
  styleUrls: ['./conflux.component.scss'],
})
export class ConfluxComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
