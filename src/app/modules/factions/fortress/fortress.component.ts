import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fortress',
  templateUrl: './fortress.component.html',
  styleUrls: ['./fortress.component.scss'],
})
export class FortressComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
