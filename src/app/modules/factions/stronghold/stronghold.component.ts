import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stronghold',
  templateUrl: './stronghold.component.html',
  styleUrls: ['./stronghold.component.scss'],
})
export class StrongholdComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
