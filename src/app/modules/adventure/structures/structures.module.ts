import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuresComponent } from './structures.component';
import { MatTableModule } from '@angular/material/table';
import { StructuresRoutingModule } from './structures-routing.module';
@NgModule({
  declarations: [StructuresComponent],
  imports: [CommonModule, StructuresRoutingModule, MatTableModule],
})
export class StructuresModule {}
