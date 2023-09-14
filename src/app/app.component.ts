import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreadcrumbsService } from './services/breadcrumbs.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map((route) => {
          const paths: string[] = [];
          while (route.firstChild) {
            route = route.firstChild;
            if (route.snapshot.data && route.snapshot.data['breadcrumb']) {
              paths.push(route.snapshot.data['breadcrumb']);
            }
          }
          return paths;
        })
      )
      .subscribe((paths) => {
        this.breadcrumbsService.setBreadcrumbs(paths);
      });
  }
}
