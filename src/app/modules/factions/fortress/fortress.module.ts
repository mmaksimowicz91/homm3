import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FortressComponent } from './fortress.component';
import { FortressRoutingModule } from './fortress-routing.module';
@NgModule({
  declarations: [FortressComponent],
  imports: [CommonModule, FortressRoutingModule],
})
export class FortressModule {}
