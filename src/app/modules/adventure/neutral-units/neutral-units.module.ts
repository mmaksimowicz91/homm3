import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeutralUnitsComponent } from './neutral-units.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NeutralUnitsRoutingModule } from './neutral-units-routing.module';
@NgModule({
  declarations: [NeutralUnitsComponent],
  imports: [
    CommonModule,
    NeutralUnitsRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class NeutralUnitsModule {}
