import { Component } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  breadcrumbs: { path: string; label: string }[] = [];

  constructor(private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbsService.breadcrumbs$.subscribe((paths) => {
      this.breadcrumbs = paths.map((path) => ({ path, label: path }));
    });
  }
}
