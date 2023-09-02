import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastleBuildingsComponent } from './castlebuildings.component';
import { CastleBuildingsRoutingModule } from './castlebuildings-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CastleBuildingsComponent],
  imports: [CommonModule, CastleBuildingsRoutingModule, MatTableModule],
})
export class CastleBuildingsModule {}
