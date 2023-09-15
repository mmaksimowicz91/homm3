import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwellingsComponent } from './dwellings.component';
import { DwellingsRoutingModule } from './dwellings-routing.module';
@NgModule({
  declarations: [DwellingsComponent],
  imports: [CommonModule, DwellingsRoutingModule],
})
export class DwellingsModule {}
