import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarthSpellsComponent } from './earthspells.component';
import { MatTableModule } from '@angular/material/table';
import { EarthSpellsRoutingModule } from './earthspells-routing.module';
@NgModule({
  declarations: [EarthSpellsComponent],
  imports: [CommonModule, EarthSpellsRoutingModule, MatTableModule],
})
export class EarthSpellsModule {}
