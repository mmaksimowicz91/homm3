import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FortressDwellingComponent } from './fortress-dwelling.component';
import { MatTableModule } from '@angular/material/table';
import { FortressDwellingRoutingModule } from './fortress-dwelling-routing.module';
@NgModule({
  declarations: [FortressDwellingComponent],
  imports: [CommonModule, FortressDwellingRoutingModule, MatTableModule],
})
export class FortressDwellingModule {}
