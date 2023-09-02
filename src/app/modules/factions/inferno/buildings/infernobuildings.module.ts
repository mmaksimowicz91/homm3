import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfernoBuildingsComponent } from './infernobuildings.component';
import { InfernoBuildingsRoutingModule } from './infernobuildings-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [InfernoBuildingsComponent],
  imports: [CommonModule, InfernoBuildingsRoutingModule, MatTableModule],
})
export class InfernoBuildingsModule {}
