import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfluxHeroesComponent } from './confluxheroes.component';
import { ConfluxHeroesRoutingModule } from './confluxheroes-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ConfluxHeroesComponent],
  imports: [CommonModule, ConfluxHeroesRoutingModule, MatTableModule],
})
export class ConfluxHeroesModule {}
