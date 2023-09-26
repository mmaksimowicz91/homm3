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
          const paths: { label: string; path: string }[] = [];
          let currentPath = '';
          while (route.firstChild) {
            route = route.firstChild;
            if (route.snapshot.data && route.snapshot.data['breadcrumb']) {
              currentPath +=
                '/' +
                route.snapshot.url.map((segment) => segment.path).join('/');
              paths.push({
                label: route.snapshot.data['breadcrumb'],
                path: currentPath,
              });
            }
          }

          if (paths.length > 0) {
            paths.pop();
          }

          if (
            paths.length > 1 &&
            paths[paths.length - 1].label === paths[paths.length - 2].label
          ) {
            paths.pop();
          }

          const homeBreadcrumb = { label: 'home', path: '/' };
          paths.unshift(homeBreadcrumb);
          return paths;
        })
      )
      .subscribe((paths) => {
        this.breadcrumbsService.setBreadcrumbs(paths);
      });
  }
}
