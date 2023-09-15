import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TowerComponent } from './tower.component';

const routes: Routes = [
  {
    path: '',
    component: TowerComponent,
  },
  {
    path: 'towerbuildings',
    loadChildren: () =>
      import('./buildings/towerbuildings.module').then(
        (m) => m.TowerBuildingsModule
      ),
    data: { breadcrumb: 'towerbuildings' },
  },
  {
    path: 'towerheroes',
    loadChildren: () =>
      import('./heroes/towerheroes.module').then((m) => m.TowerHeroesModule),
    data: { breadcrumb: 'towerheroes' },
  },
  {
    path: 'towerunits',
    loadChildren: () =>
      import('./units/towerunits.module').then((m) => m.TowerUnitsModule),
    data: { breadcrumb: 'towerunits' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TowerRoutingModule {}
