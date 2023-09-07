import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StrongholdComponent } from './stronghold.component';
import { StrongholdRoutingModule } from './stronghold-routing.module';
@NgModule({
  declarations: [StrongholdComponent],
  imports: [CommonModule, StrongholdRoutingModule],
})
export class StrongholdModule {}
