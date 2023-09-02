import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TowerUnitsComponent } from './towerunits.component';
import { MatTableModule } from '@angular/material/table';
import { TowerUnitsRoutingModule } from './towerunits-routing.module';
@NgModule({
  declarations: [TowerUnitsComponent],
  imports: [CommonModule, TowerUnitsRoutingModule, MatTableModule],
})
export class TowerUnitsModule {}
