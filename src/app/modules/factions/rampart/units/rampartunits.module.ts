import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RampartUnitsComponent } from './rampartunits.component';
import { MatTableModule } from '@angular/material/table';
import { RampartUnitsRoutingModule } from './rampartunits-routing.module';
@NgModule({
  declarations: [RampartUnitsComponent],
  imports: [CommonModule, RampartUnitsRoutingModule, MatTableModule],
})
export class RampartUnitsModule {}
