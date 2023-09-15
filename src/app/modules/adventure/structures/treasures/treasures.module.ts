import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreasuresComponent } from './treasures.component';
import { MatTableModule } from '@angular/material/table';
import { TreasuresRoutingModule } from './treasures-routing.module';
@NgModule({
  declarations: [TreasuresComponent],
  imports: [CommonModule, TreasuresRoutingModule, MatTableModule],
})
export class TreasuresModule {}
