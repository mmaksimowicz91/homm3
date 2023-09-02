import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfluxBuildingsComponent } from './confluxbuildings.component';
import { ConfluxBuildingsRoutingModule } from './confluxbuildings-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ConfluxBuildingsComponent],
  imports: [CommonModule, ConfluxBuildingsRoutingModule, MatTableModule],
})
export class ConfluxBuildingsModule {}
