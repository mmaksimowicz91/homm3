import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TowerHeroesComponent } from './towerheroes.component';
import { MatTableModule } from '@angular/material/table';
import { TowerHeroesRoutingModule } from './towerheroes-routing.module';
@NgModule({
  declarations: [TowerHeroesComponent],
  imports: [CommonModule, TowerHeroesRoutingModule, MatTableModule],
})
export class TowerHeroesModule {}
