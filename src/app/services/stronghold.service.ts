import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class StrongholdService {
  strongholdBuildingsUrl = 'assets/buildings/strongholdBuildings.json';
  strongholdHeroesUrl = 'assets/heroes/strongholdHeroes.json';
  strongholdUnitsUrl = 'assets/units/strongholdUnits.json';
  constructor(private http: HttpClient) {}

  getStrongholdBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(`${this.strongholdBuildingsUrl}`);
  }

  getStrongholdHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.strongholdHeroesUrl}`);
  }

  getStrongholdUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.strongholdUnitsUrl}`);
  }
}
