import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spells } from '../models/spells.model';

@Injectable({
  providedIn: 'root',
})
export class SpellsService {
  fireSpellsUrl = 'assets/spells/fireSpells.json';
  airSpellsUrl = 'assets/spells/airSpells.json';
  waterSpellsUrl = 'assets/spells/waterSpells.json';
  earthSpellsUrl = 'assets/spells/earthSpells.json';
  constructor(private http: HttpClient) {}

  getFireSpells(): Observable<Spells[]> {
    return this.http.get<Spells[]>(`${this.fireSpellsUrl}`);
  }

  getAirSpells(): Observable<Spells[]> {
    return this.http.get<Spells[]>(`${this.airSpellsUrl}`);
  }

  getWaterSpells(): Observable<Spells[]> {
    return this.http.get<Spells[]>(`${this.waterSpellsUrl}`);
  }

  getEarthSpells(): Observable<Spells[]> {
    return this.http.get<Spells[]>(`${this.earthSpellsUrl}`);
  }
}
