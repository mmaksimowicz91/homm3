import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class DungeonService {
  dungeonBuildingsUrl = 'assets/buildings/dungeonBuildings.json';
  dungeonHeroesUrl = 'assets/heroes/dungeonHeroes.json';
  dungeonUnitsUrl = 'assets/units/dungeonUnits.json';
  constructor(private http: HttpClient) {}

  getDungeonBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(`${this.dungeonBuildingsUrl}`);
  }

  getDungeonHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.dungeonHeroesUrl}`);
  }

  getDungeonUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.dungeonUnitsUrl}`);
  }
}
