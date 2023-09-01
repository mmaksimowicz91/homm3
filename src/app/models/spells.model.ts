export interface Spells {
  name: string;
  icon: string;
  type: SpellType;
  level: number;
  mana_cost: number;
  basic_level: string;
  advanced_level: string;
  expert_level: string;
}

export enum SpellType {
  COMBAT = 'COMBAT',
  ADVENTURE = 'ADVENTURE',
}
