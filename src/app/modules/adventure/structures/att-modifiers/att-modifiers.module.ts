import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttModifiersComponent } from './att-modifiers.component';
import { MatTableModule } from '@angular/material/table';
import { AttModifiersRoutingModule } from './att-modifiers-routing.module';
@NgModule({
  declarations: [AttModifiersComponent],
  imports: [CommonModule, AttModifiersRoutingModule, MatTableModule],
})
export class AttModifiersModule {}
