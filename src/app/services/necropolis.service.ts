import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class NecropolisService {
  necropolisBuildingsUrl = 'assets/buildings/necropolisBuildings.json';
  necropolisHeroesUrl = 'assets/heroes/necropolisHeroes.json';
  necropolisUnitsUrl = 'assets/units/necropolisUnits.json';
  constructor(private http: HttpClient) {}

  getNecropolisBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(`${this.necropolisBuildingsUrl}`);
  }

  getNecropolisHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.necropolisHeroesUrl}`);
  }

  getNecropolisUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.necropolisUnitsUrl}`);
  }
}
