import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeutralDwellingComponent } from './neutral-dwelling.component';
import { MatTableModule } from '@angular/material/table';
import { NeutralDwellingRoutingModule } from './neutral-dwelling-routing.module';
@NgModule({
  declarations: [NeutralDwellingComponent],
  imports: [CommonModule, NeutralDwellingRoutingModule, MatTableModule],
})
export class NeutralDwellingModule {}
