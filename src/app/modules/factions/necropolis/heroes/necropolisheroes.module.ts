import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NecropolisHeroesComponent } from './necropolisheroes.component';
import { NecropolisHeroesRoutingModule } from './necropolisheroes-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [NecropolisHeroesComponent],
  imports: [CommonModule, NecropolisHeroesRoutingModule, MatTableModule],
})
export class NecropolisHeroesModule {}
