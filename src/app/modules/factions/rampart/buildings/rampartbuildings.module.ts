import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RampartBuildingsComponent } from './rampartbuildings.component';
import { RampartBuildingsRoutingModule } from './rampartbuildings-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [RampartBuildingsComponent],
  imports: [CommonModule, RampartBuildingsRoutingModule, MatTableModule],
})
export class RampartBuildingsModule {}
