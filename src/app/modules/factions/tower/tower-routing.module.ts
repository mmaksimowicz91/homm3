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
    data: { breadcrumb: 'Buildings' },
  },
  {
    path: 'towerheroes',
    loadChildren: () =>
      import('./heroes/towerheroes.module').then((m) => m.TowerHeroesModule),
    data: { breadcrumb: 'Heroes' },
  },
  {
    path: 'towerunits',
    loadChildren: () =>
      import('./units/towerunits.module').then((m) => m.TowerUnitsModule),
    data: { breadcrumb: 'Units' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TowerRoutingModule {}
