import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FortressHeroesComponent } from './fortressheroes.component';
import { MatTableModule } from '@angular/material/table';
import { FortressHeroesRoutingModule } from './fortressheroes-routing.module';
@NgModule({
  declarations: [FortressHeroesComponent],
  imports: [CommonModule, FortressHeroesRoutingModule, MatTableModule],
})
export class FortressHeroesModule {}
