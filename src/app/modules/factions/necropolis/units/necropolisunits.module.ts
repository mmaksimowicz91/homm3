import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NecropolisUnitsComponent } from './necropolisunits.component';
import { NecropolisUnitsRoutingModule } from './necropolisunits-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [NecropolisUnitsComponent],
  imports: [CommonModule, NecropolisUnitsRoutingModule, MatTableModule],
})
export class NecropolisUnitsModule {}
