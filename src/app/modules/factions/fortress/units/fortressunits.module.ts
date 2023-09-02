import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FortressUnitsComponent } from './fortressunits.component';
import { MatTableModule } from '@angular/material/table';
import { FortressUnitsRoutingModule } from './fortressunits-routing.module';
@NgModule({
  declarations: [FortressUnitsComponent],
  imports: [CommonModule, FortressUnitsRoutingModule, MatTableModule],
})
export class FortressUnitsModule {}
