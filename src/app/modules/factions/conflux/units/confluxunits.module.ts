import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfluxUnitsComponent } from './confluxunits.component';
import { ConfluxUnitsRoutingModule } from './confluxunits-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ConfluxUnitsComponent],
  imports: [CommonModule, ConfluxUnitsRoutingModule, MatTableModule],
})
export class ConfluxUnitsModule {}
