import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RampartDwellingComponent } from './rampart-dwelling.component';
import { MatTableModule } from '@angular/material/table';
import { RampartDwellingRoutingModule } from './rampart-dwelling-routing.module';
@NgModule({
  declarations: [RampartDwellingComponent],
  imports: [CommonModule, RampartDwellingRoutingModule, MatTableModule],
})
export class RampartDwellingModule {}
