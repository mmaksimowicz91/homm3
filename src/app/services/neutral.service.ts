import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class NeutralService {
  infernoBuildingsUrl = 'assets/buildings/infernoBuildings.json';
  infernoHeroesUrl = 'assets/heroes/infernoHeroes.json';
  neutralUnitsUrl = 'assets/units/noFactionUnits.json';
  constructor(private http: HttpClient) {}

  getNeutralUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.neutralUnitsUrl}`);
  }
}
