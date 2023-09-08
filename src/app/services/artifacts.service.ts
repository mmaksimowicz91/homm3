import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artifacts } from '../models/artifacts.model';

@Injectable({
  providedIn: 'root',
})
export class ArtifactsService {
  artifactssUrl = '/assets/artifacts/artifacts.json';

  constructor(private http: HttpClient) {}

  getArtifacts(): Observable<Artifacts[]> {
    return this.http.get<Artifacts[]>(`${this.artifactssUrl}`);
  }
}
