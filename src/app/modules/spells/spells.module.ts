import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsComponent } from './spells.component';
import { SpellsRoutingModule } from './spells-routing.module';
@NgModule({
  declarations: [SpellsComponent],
  imports: [CommonModule, SpellsRoutingModule],
})
export class SpellsModule {}
