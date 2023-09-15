import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfluxDwellingComponent } from './conflux-dwelling.component';
import { MatTableModule } from '@angular/material/table';
import { ConfluxDwellingRoutingModule } from './conflux-dwelling-routing.module';
@NgModule({
  declarations: [ConfluxDwellingComponent],
  imports: [CommonModule, ConfluxDwellingRoutingModule, MatTableModule],
})
export class ConfluxDwellingModule {}
