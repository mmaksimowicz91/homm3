import { Faction } from './faction.enum';

enum AttackType {
  Ranged = 'ranged',
  Melee = 'melee',
}

enum Upgraded {
  Yes = 'yes',
  No = 'no',
}
export interface Units {
  name: string;
  image: string;
  tier: number;
  upgraded: Upgraded;
  type: AttackType;
  dwelling: string;
  cost: string;
  attack: number;
  defense: number;
  hp: number;
  damage: string;
  speed: number;
  growth: number;
  special: string;
}
