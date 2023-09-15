import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NecropolisDwellingComponent } from './necropolis-dwelling.component';
import { MatTableModule } from '@angular/material/table';
import { NecropolisDwellingRoutingModule } from './necropolis-dwelling-routing.module';
@NgModule({
  declarations: [NecropolisDwellingComponent],
  imports: [CommonModule, NecropolisDwellingRoutingModule, MatTableModule],
})
export class NecropolisDwellingModule {}
