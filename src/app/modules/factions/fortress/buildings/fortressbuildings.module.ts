import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FortressBuildingsComponent } from './fortressbuildings.component';
import { MatTableModule } from '@angular/material/table';
import { FortressBuildingsRoutingModule } from './fortressbuildings-routing.modue';
@NgModule({
  declarations: [FortressBuildingsComponent],
  imports: [CommonModule, FortressBuildingsRoutingModule, MatTableModule],
})
export class FortressBuildingsModule {}
