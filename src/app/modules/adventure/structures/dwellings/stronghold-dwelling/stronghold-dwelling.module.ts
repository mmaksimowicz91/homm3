import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrongholdDwellingComponent } from './stronghold-dwelling.component';
import { MatTableModule } from '@angular/material/table';
import { StrongholdDwellingRoutingModule } from './stronghold-dwelling-routing.module';
@NgModule({
  declarations: [StrongholdDwellingComponent],
  imports: [CommonModule, StrongholdDwellingRoutingModule, MatTableModule],
})
export class StrongholdDwellingModule {}
