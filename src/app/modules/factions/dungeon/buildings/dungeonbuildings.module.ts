import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DungeonBuildingsComponent } from './dungeonbuildings.component';
import { DungeonBuildingsRoutingModule } from './dungeonbuildings-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [DungeonBuildingsComponent],
  imports: [CommonModule, DungeonBuildingsRoutingModule, MatTableModule],
})
export class DungeonBuildingsModule {}
