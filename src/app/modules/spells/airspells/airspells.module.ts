import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirSpellsComponent } from './airspells.component';
import { MatTableModule } from '@angular/material/table';
import { AirSpellsRoutingModule } from './airspells-routing.module';
@NgModule({
  declarations: [AirSpellsComponent],
  imports: [CommonModule, AirSpellsRoutingModule, MatTableModule],
})
export class AirSpellsModule {}
