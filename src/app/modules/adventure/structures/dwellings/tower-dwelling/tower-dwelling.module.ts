import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TowerDwellingComponent } from './tower-dwelling.component';
import { MatTableModule } from '@angular/material/table';
import { TowerDwellingRoutingModule } from './tower-dwelling-routing.module';
@NgModule({
  declarations: [TowerDwellingComponent],
  imports: [CommonModule, TowerDwellingRoutingModule, MatTableModule],
})
export class TowerDwellingModule {}
