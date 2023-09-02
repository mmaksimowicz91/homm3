import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrongholdUnitsComponent } from './strongholdunits.component';
import { MatTableModule } from '@angular/material/table';
import { StrongholdUnitsRoutingModule } from './strongholdunits-routing.module';
@NgModule({
  declarations: [StrongholdUnitsComponent],
  imports: [CommonModule, StrongholdUnitsRoutingModule, MatTableModule],
})
export class StrongholdUnitsModule {}
