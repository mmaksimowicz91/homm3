import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfernoDwellingComponent } from './inferno-dwelling.component';
import { MatTableModule } from '@angular/material/table';
import { InfernoDwellingRoutingModule } from './inferno-dwelling-routing.module';
@NgModule({
  declarations: [InfernoDwellingComponent],
  imports: [CommonModule, InfernoDwellingRoutingModule, MatTableModule],
})
export class InfernoDwellingModule {}
