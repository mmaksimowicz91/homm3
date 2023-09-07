import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FortressComponent } from './fortress.component';

const routes: Routes = [
  {
    path: '',
    component: FortressComponent,
    children: [
      {
        path: 'fortressbuildings',
        loadChildren: () =>
          import('./buildings/fortressbuildings.module').then(
            (m) => m.FortressBuildingsModule
          ),
      },
      {
        path: 'fortressheroes',
        loadChildren: () =>
          import('./heroes/fortressheroes.module').then(
            (m) => m.FortressHeroesModule
          ),
      },
      {
        path: 'fortressunits',
        loadChildren: () =>
          import('./units/fortressunits.module').then(
            (m) => m.FortressUnitsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortressRoutingModule {}
