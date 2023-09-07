import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TowerComponent } from './tower.component';

const routes: Routes = [
  {
    path: '',
    component: TowerComponent,
    children: [
      {
        path: 'towerbuildings',
        loadChildren: () =>
          import('./buildings/towerbuildings.module').then(
            (m) => m.TowerBuildingsModule
          ),
      },
      {
        path: 'towerheroes',
        loadChildren: () =>
          import('./heroes/towerheroes.module').then(
            (m) => m.TowerHeroesModule
          ),
      },
      {
        path: 'towerunits',
        loadChildren: () =>
          import('./units/towerunits.module').then((m) => m.TowerUnitsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TowerRoutingModule {}
