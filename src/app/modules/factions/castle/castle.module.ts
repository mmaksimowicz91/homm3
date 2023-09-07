import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CastleRoutingModule } from './castle-routing.module';
import { CastleComponent } from './castle.component';

@NgModule({
  declarations: [CastleComponent],
  imports: [CommonModule, CastleRoutingModule],
})
export class CastleModule {}
