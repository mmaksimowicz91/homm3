import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/buildings.model';
import { Heroes } from '../models/heroes.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class RampartService {
  rampartBuildingsUrl = 'assets/buildings/rampartBuildings.json';
  rampartHeroesUrl = 'assets/heroes/rampartHeroes.json';
  rampartUnitsUrl = 'assets/units/rampartUnits.json';
  constructor(private http: HttpClient) {}

  getRampartBuildings(): Observable<Buildings[]> {
    return this.http.get<Buildings[]>(`${this.rampartBuildingsUrl}`);
  }

  getRampartHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.rampartHeroesUrl}`);
  }

  getRampartUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.rampartUnitsUrl}`);
  }
}
