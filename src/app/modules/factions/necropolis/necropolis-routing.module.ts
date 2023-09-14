import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NecropolisComponent } from './necropolis.component';

const routes: Routes = [
  {
    path: '',
    component: NecropolisComponent,
  },
  {
    path: 'necropolisbuildings',
    loadChildren: () =>
      import('./buildings/necropolisbuildings.module').then(
        (m) => m.NecropolisBuildingsModule
      ),
    data: { breadcrumb: 'Buildings' },
  },
  {
    path: 'necropolisheroes',
    loadChildren: () =>
      import('./heroes/necropolisheroes.module').then(
        (m) => m.NecropolisHeroesModule
      ),
    data: { breadcrumb: 'Heroes' },
  },
  {
    path: 'necropolisunits',
    loadChildren: () =>
      import('./units/necropolisunits.module').then(
        (m) => m.NecropolisUnitsModule
      ),
    data: { breadcrumb: 'Units' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NecropolisRoutingModule {}
