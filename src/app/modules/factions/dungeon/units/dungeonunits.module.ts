import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DungeonUnitsComponent } from './dungeonunits.component';
import { MatTableModule } from '@angular/material/table';
import { DungeonUnitsRoutingModule } from './dungeonunits-routing.module';
@NgModule({
  declarations: [DungeonUnitsComponent],
  imports: [CommonModule, DungeonUnitsRoutingModule, MatTableModule],
})
export class DungeonUnitsModule {}
