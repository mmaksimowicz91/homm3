import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinesComponent } from './mines.component';
import { MatTableModule } from '@angular/material/table';
import { MinesRoutingModule } from './mines-routing.module';
@NgModule({
  declarations: [MinesComponent],
  imports: [CommonModule, MinesRoutingModule, MatTableModule],
})
export class MinesModule {}
