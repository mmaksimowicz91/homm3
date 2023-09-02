import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonHeroesComponent } from './dungeonheroes.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DungeonHeroesRoutingModule {}
