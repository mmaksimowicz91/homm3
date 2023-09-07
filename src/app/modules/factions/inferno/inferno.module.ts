import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfernoComponent } from './inferno.component';
import { InfernoRoutingModule } from './inferno-routing.module';
@NgModule({
  declarations: [InfernoComponent],
  imports: [CommonModule, InfernoRoutingModule],
})
export class InfernoModule {}
