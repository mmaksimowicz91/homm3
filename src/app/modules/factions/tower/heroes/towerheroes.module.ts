import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TowerHeroesComponent } from './towerheroes.component';

const routes: Routes = [
  {
    path: '',
    component: TowerHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TowerHeroesRoutingModule {}
