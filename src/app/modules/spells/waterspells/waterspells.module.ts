import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterSpellsComponent } from './waterspells.component';
import { MatTableModule } from '@angular/material/table';
import { WaterSpellsRoutingModule } from './waterspells-routing.module';
@NgModule({
  declarations: [WaterSpellsComponent],
  imports: [CommonModule, WaterSpellsRoutingModule, MatTableModule],
})
export class WaterSpellsModule {}
