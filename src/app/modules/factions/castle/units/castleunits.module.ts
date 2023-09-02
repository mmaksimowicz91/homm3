import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastleUnitsComponent } from './castleunits.component';
import { CastleUnitsRoutingModule } from './castleunits-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CastleUnitsComponent],
  imports: [CommonModule, CastleUnitsRoutingModule, MatTableModule],
})
export class CastleUnitsModule {}
