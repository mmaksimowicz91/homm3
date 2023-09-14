import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfluxComponent } from './conflux.component';

const routes: Routes = [
  {
    path: '',
    component: ConfluxComponent,
  },
  {
    path: 'confluxbuildings',
    loadChildren: () =>
      import('./buildings/confluxbuildings.module').then(
        (m) => m.ConfluxBuildingsModule
      ),
    data: { breadcrumb: 'Buildings' },
  },
  {
    path: 'confluxheroes',
    loadChildren: () =>
      import('./heroes/confluxheroes.module').then(
        (m) => m.ConfluxHeroesModule
      ),
    data: { breadcrumb: 'Heroes' },
  },
  {
    path: 'confluxunits',
    loadChildren: () =>
      import('./units/confluxunits.module').then((m) => m.ConfluxUnitsModule),
    data: { breadcrumb: 'Units' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfluxRoutingModule {}
