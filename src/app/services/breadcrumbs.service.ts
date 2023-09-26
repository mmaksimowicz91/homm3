import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private breadcrumbs = new BehaviorSubject<{ label: string; path: string }[]>(
    []
  );
  breadcrumbs$ = this.breadcrumbs.asObservable();

  setBreadcrumbs(paths: { label: string; path: string }[]) {
    this.breadcrumbs.next(paths);
  }
}
