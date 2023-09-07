import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skillssUrl = 'assets/skills/skills.json';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.skillssUrl}`);
  }
}
