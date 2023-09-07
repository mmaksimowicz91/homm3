import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NecropolisComponent } from './necropolis.component';
import { NecropolisRoutingModule } from './necropolis-routing.module';
@NgModule({
  declarations: [NecropolisComponent],
  imports: [CommonModule, NecropolisRoutingModule],
})
export class NecropolisModule {}
