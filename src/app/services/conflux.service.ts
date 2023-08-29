import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class ConfluxService {
  confluxBuildingsUrl = 'assets/buildings/confluxBuildings.json';
  confluxHeroesUrl = 'assets/heroes/confluxHeroes.json';
  confluxUnitsUrl = 'assets/units/confluxUnits.json';
  constructor(private http: HttpClient) {}

  getConfluxBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(`${this.confluxBuildingsUrl}`);
  }

  getConfluxHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.confluxHeroesUrl}`);
  }

  getConfluxUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.confluxUnitsUrl}`);
  }
}
