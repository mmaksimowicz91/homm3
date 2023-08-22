import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class FactionsService {
  castleBuildingsUrl = 'assets/buildings/castleBuildings.json';
  heroesUrl = 'assets/heroes.json';
  unitsUrl = 'assets/units.json';
  constructor(private http: HttpClient) {}

  getCastleBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(`${this.castleBuildingsUrl}`);
  }

  getHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.heroesUrl}`);
  }

  getUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.unitsUrl}`);
  }
}
