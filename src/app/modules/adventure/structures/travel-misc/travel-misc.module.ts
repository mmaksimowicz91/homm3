import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelMiscComponent } from './travel-misc.component';
import { MatTableModule } from '@angular/material/table';
import { TravelMiscRoutingModule } from './travel-misc-routing.module';
@NgModule({
  declarations: [TravelMiscComponent],
  imports: [CommonModule, TravelMiscRoutingModule, MatTableModule],
})
export class TravelMiscModule {}
