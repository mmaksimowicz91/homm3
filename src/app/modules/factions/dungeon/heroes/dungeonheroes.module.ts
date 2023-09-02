import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DungeonHeroesComponent } from './dungeonheroes.component';
import { DungeonHeroesRoutingModule } from './dungeonheroes-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [DungeonHeroesComponent],
  imports: [CommonModule, DungeonHeroesRoutingModule, MatTableModule],
})
export class DungeonHeroesModule {}
