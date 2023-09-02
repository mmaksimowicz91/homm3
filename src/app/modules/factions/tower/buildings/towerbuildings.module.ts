import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TowerBuildingsComponent } from './towerbuildings.component';
import { MatTableModule } from '@angular/material/table';
import { TowerBuildingsRoutingModule } from './towerbuildings-routing.module';
@NgModule({
  declarations: [TowerBuildingsComponent],
  imports: [CommonModule, TowerBuildingsRoutingModule, MatTableModule],
})
export class TowerBuildingsModule {}
