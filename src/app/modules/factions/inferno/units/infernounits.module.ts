import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfernoUnitsComponent } from './infernounits.component';
import { InfernoUnitsRoutingModule } from './infernounits-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [InfernoUnitsComponent],
  imports: [CommonModule, InfernoUnitsRoutingModule, MatTableModule],
})
export class InfernoUnitsModule {}
