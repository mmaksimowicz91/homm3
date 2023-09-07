import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactionsComponent } from './factions.component';
import { FactionsRoutingModule } from './factions-routing.module';
@NgModule({
  declarations: [FactionsComponent],
  imports: [CommonModule, FactionsRoutingModule],
})
export class FactionsModule {}
