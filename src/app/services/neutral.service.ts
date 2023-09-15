import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdventureStructures } from '../models/adv-structures.model';
import { Units } from '../models/units.model';

@Injectable({
  providedIn: 'root',
})
export class NeutralService {
  neutralUnitsUrl = 'assets/units/noFactionUnits.json';
  attributeBoostersUrl = 'assets/buildings/attributeStructures.json';
  creatureBanksUrl = 'assets/buildings/creatureBanks.json';
  castleDwellingUrl = 'assets/buildings/dwellings/castle.json';
  rampartDwellingUrl = 'assets/buildings/dwellings/rampart.json';
  infernoDwellingUrl = 'assets/buildings/dwellings/inferno.json';
  necropolisDwellingUrl = 'assets/buildings/dwellings/necropolis.json';
  strongholdDwellingUrl = 'assets/buildings/dwellings/stronghold.json';
  dungeonDwellingUrl = 'assets/buildings/dwellings/dungeon.json';
  towerDwellingUrl = 'assets/buildings/dwellings/tower.json';
  confluxDwellingUrl = 'assets/buildings/dwellings/conflux.json';
  fortressDwellingUrl = 'assets/buildings/dwellings/fortress.json';
  miscellaneousUrl = '/src/assets/buildings/miscellaneous.json';

  constructor(private http: HttpClient) {}

  getNeutralUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(`${this.neutralUnitsUrl}`);
  }

  getAttributeModifier(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(`${this.attributeBoostersUrl}`);
  }

  getCreatureBanks(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(`${this.creatureBanksUrl}`);
  }

  getRampartDwelling(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(`${this.rampartDwellingUrl}`);
  }

  getTowerDwelling(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(`${this.towerDwellingUrl}`);
  }

  getInfernoDwelling(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(`${this.infernoDwellingUrl}`);
  }

  getDungeonDwelling(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(`${this.dungeonDwellingUrl}`);
  }

  getNecropolisDwelling(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(
      `${this.necropolisDwellingUrl}`
    );
  }

  getStrongholdDwelling(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(
      `${this.strongholdDwellingUrl}`
    );
  }

  getFortressDwelling(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(`${this.fortressDwellingUrl}`);
  }

  getCastleDwelling(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(`${this.castleDwellingUrl}`);
  }

  getConfluxDwelling(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(`${this.confluxDwellingUrl}`);
  }

  getMiscellaneous(): Observable<AdventureStructures[]> {
    return this.http.get<AdventureStructures[]>(`${this.miscellaneousUrl}`);
  }
}
