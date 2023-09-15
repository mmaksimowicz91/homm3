import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeutralUnitsComponent } from './neutral-units.component';
import { MatTableModule } from '@angular/material/table';
import { NeutralUnitsRoutingModule } from './neutral-units-routing.module';
@NgModule({
  declarations: [NeutralUnitsComponent],
  imports: [CommonModule, NeutralUnitsRoutingModule, MatTableModule],
})
export class NeutralUnitsModule {}
