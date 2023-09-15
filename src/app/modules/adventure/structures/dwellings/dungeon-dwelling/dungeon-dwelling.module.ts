import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DungeonDwellingComponent } from './dungeon-dwelling.component';
import { MatTableModule } from '@angular/material/table';
import { DungeonDwellingRoutingModule } from './dungeon-dwelling-routing.module';
@NgModule({
  declarations: [DungeonDwellingComponent],
  imports: [CommonModule, DungeonDwellingRoutingModule, MatTableModule],
})
export class DungeonDwellingModule {}
