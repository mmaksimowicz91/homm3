import { Faction } from './faction.enum';

export interface Buildings {
  structure: string;
  faction: Faction;
  cost: string;
  requirements: string;
  benefits: string;
}
