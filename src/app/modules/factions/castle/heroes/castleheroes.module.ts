import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastleHeroesComponent } from './castleheroes.component';
import { CastleHeroesRoutingModule } from './castleheroes-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CastleHeroesComponent],
  imports: [CommonModule, CastleHeroesRoutingModule, MatTableModule],
})
export class CastleHeroesModule {}
