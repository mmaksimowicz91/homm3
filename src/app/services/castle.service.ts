import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class CastleService {
  castleBuildingsUrl = 'assets/buildings/castleBuildings.json';
  castleHeroesUrl = 'assets/heroes/castleHeroes.json';
  castleUnitsUrl = 'assets/units/castleUnits.json';
  constructor(private http: HttpClient) {}

  getCastleBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(`${this.castleBuildingsUrl}`);
  }

  getCastleHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.castleHeroesUrl}`);
  }

  getCastleUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.castleUnitsUrl}`);
  }
}
