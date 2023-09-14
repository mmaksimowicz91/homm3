import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureComponent } from './adventure.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdventureRoutingModule } from './adventure-routing.module';
import { NecropolisDwellingComponent } from './structures/dwellings/necropolis-dwelling/necropolis-dwelling.component';
import { ConfluxDwellingComponent } from './structures/dwellings/conflux-dwelling/conflux-dwelling.component';
import { FortressDwellingComponent } from './structures/dwellings/fortress-dwelling/fortress-dwelling.component';
import { DungeonDwellingComponent } from './structures/dwellings/dungeon-dwelling/dungeon-dwelling.component';
import { StrongholdDwellingComponent } from './structures/dwellings/stronghold-dwelling/stronghold-dwelling.component';
import { TowerDwellingComponent } from './structures/dwellings/tower-dwelling/tower-dwelling.component';
import { InfernoDwellingComponent } from './structures/dwellings/inferno-dwelling/inferno-dwelling.component';
import { RampartDwellingComponent } from './structures/dwellings/rampart-dwelling/rampart-dwelling.component';
import { CastleDwellingComponent } from './structures/dwellings/castle-dwelling/castle-dwelling.component';
@NgModule({
  declarations: [AdventureComponent, NecropolisDwellingComponent, ConfluxDwellingComponent, FortressDwellingComponent, DungeonDwellingComponent, StrongholdDwellingComponent, TowerDwellingComponent, InfernoDwellingComponent, RampartDwellingComponent, CastleDwellingComponent],
  imports: [
    CommonModule,
    AdventureRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class AdventureModule {}
