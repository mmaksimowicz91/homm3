import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrongholdBuildingsComponent } from './strongholdbuildings.component';
import { MatTableModule } from '@angular/material/table';
import { StrongholdBuildingsRoutingModule } from './strongholdbuilding-routing.module';
@NgModule({
  declarations: [StrongholdBuildingsComponent],
  imports: [CommonModule, StrongholdBuildingsRoutingModule, MatTableModule],
})
export class StrongholdBuildingsModule {}
