import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class TowerService {
  towerBuildingsUrl = 'assets/buildings/towerBuildings.json';
  towerHeroesUrl = 'assets/heroes/towerHeroes.json';
  towerUnitsUrl = 'assets/units/towerUnits.json';
  constructor(private http: HttpClient) {}

  getTowerBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(`${this.towerBuildingsUrl}`);
  }

  getTowerHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.towerHeroesUrl}`);
  }

  getTowerUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.towerUnitsUrl}`);
  }
}
