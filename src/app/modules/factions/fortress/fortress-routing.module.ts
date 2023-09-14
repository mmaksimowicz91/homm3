import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FortressComponent } from './fortress.component';

const routes: Routes = [
  {
    path: '',
    component: FortressComponent,
  },
  {
    path: 'fortressbuildings',
    loadChildren: () =>
      import('./buildings/fortressbuildings.module').then(
        (m) => m.FortressBuildingsModule
      ),
    data: { breadcrumb: 'Buildings' },
  },
  {
    path: 'fortressheroes',
    loadChildren: () =>
      import('./heroes/fortressheroes.module').then(
        (m) => m.FortressHeroesModule
      ),
    data: { breadcrumb: 'Heroes' },
  },
  {
    path: 'fortressunits',
    loadChildren: () =>
      import('./units/fortressunits.module').then((m) => m.FortressUnitsModule),
    data: { breadcrumb: 'Units' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortressRoutingModule {}
