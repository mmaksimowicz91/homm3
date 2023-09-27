import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rampart',
  templateUrl: './rampart.component.html',
  styleUrls: ['./rampart.component.scss'],
})
export class RampartComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
