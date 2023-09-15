import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastleDwellingComponent } from './castle-dwelling.component';
import { MatTableModule } from '@angular/material/table';
import { CastleDwellingRoutingModule } from './castle-dwelling-routing.module';
@NgModule({
  declarations: [CastleDwellingComponent],
  imports: [CommonModule, CastleDwellingRoutingModule, MatTableModule],
})
export class CastleDwellingModule {}
