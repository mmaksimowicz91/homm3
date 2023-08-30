import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class FortressService {
  fortressBuildingsUrl = 'assets/buildings/fortressBuildings.json';
  fortressHeroesUrl = 'assets/heroes/fortressHeroes.json';
  fortressUnitsUrl = 'assets/units/fortressUnits.json';
  constructor(private http: HttpClient) {}

  getFortressBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(`${this.fortressBuildingsUrl}`);
  }

  getFortressHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.fortressHeroesUrl}`);
  }

  getFortressUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.fortressUnitsUrl}`);
  }
}
