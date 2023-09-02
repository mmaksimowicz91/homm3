import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrongholdHeroesComponent } from './strongholdheroes.component';
import { MatTableModule } from '@angular/material/table';
import { StrongholdHeroesRoutingModule } from './strongholdheroes-routing.module';
@NgModule({
  declarations: [StrongholdHeroesComponent],
  imports: [CommonModule, StrongholdHeroesRoutingModule, MatTableModule],
})
export class StrongholdHeroesModule {}
