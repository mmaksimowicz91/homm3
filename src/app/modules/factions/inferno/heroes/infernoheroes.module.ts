import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfernoHeroesComponent } from './infernoheroes.component';
import { InfernoHeroesRoutingModule } from './infernoheroes-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [InfernoHeroesComponent],
  imports: [CommonModule, InfernoHeroesRoutingModule, MatTableModule],
})
export class InfernoHeroesModule {}
