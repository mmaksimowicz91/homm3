import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class InfernoService {
  infernoBuildingsUrl = 'assets/buildings/infernoBuildings.json';
  infernoHeroesUrl = 'assets/heroes/infernoHeroes.json';
  infernoUnitsUrl = 'assets/units/infernoUnits.json';
  constructor(private http: HttpClient) {}

  getInfernoBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(`${this.infernoBuildingsUrl}`);
  }

  getInfernoHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.infernoHeroesUrl}`);
  }

  getInfernoUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.infernoUnitsUrl}`);
  }
}
