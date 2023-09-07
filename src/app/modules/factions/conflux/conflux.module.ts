import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfluxComponent } from './conflux.component';
import { ConfluxRoutingModule } from './conflux-routing.module';

@NgModule({
  declarations: [ConfluxComponent],
  imports: [CommonModule, ConfluxRoutingModule],
})
export class ConfluxModule {}
