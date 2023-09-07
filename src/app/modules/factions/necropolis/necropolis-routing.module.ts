import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NecropolisComponent } from './necropolis.component';

const routes: Routes = [
  {
    path: '',
    component: NecropolisComponent,
    children: [
      {
        path: 'necropolisbuildings',
        loadChildren: () =>
          import('./buildings/necropolisbuilding.module').then(
            (m) => m.NecropolisBuildingsModule
          ),
      },
      {
        path: 'necropolisheroes',
        loadChildren: () =>
          import('./heroes/necropolisheroes.module').then(
            (m) => m.NecropolisHeroesModule
          ),
      },
      {
        path: 'necropolisunits',
        loadChildren: () =>
          import('./units/necropolisunits.module').then(
            (m) => m.NecropolisUnitsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NecropolisRoutingModule {}
