import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireSpellsComponent } from './firespells.component';
import { MatTableModule } from '@angular/material/table';
import { FireSpellsRoutingModule } from './firespells-routing.module';
@NgModule({
  declarations: [FireSpellsComponent],
  imports: [CommonModule, FireSpellsRoutingModule, MatTableModule],
})
export class FireSpellsModule {}
