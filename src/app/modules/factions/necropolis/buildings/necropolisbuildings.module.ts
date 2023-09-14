import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NecropolisBuildingsComponent } from './necropolisbuildings.component';
import { NecropolisBuildingsRoutingModule } from './necropolisbuilding-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [NecropolisBuildingsComponent],
  imports: [CommonModule, NecropolisBuildingsRoutingModule, MatTableModule],
})
export class NecropolisBuildingsModule {}
