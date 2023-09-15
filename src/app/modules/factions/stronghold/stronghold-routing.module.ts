import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrongholdComponent } from './stronghold.component';
const routes: Routes = [
  {
    path: '',
    component: StrongholdComponent,
  },
  {
    path: 'strongholdbuildings',
    loadChildren: () =>
      import('./buildings/strongholdbuildings.module').then(
        (m) => m.StrongholdBuildingsModule
      ),
    data: { breadcrumb: 'strongholdbuildings' },
  },
  {
    path: 'strongholdheroes',
    loadChildren: () =>
      import('./heroes/strongholdheroes.module').then(
        (m) => m.StrongholdHeroesModule
      ),
    data: { breadcrumb: 'strongholdheroes' },
  },
  {
    path: 'strongholdunits',
    loadChildren: () =>
      import('./units/strongholdunits.module').then(
        (m) => m.StrongholdUnitsModule
      ),
    data: { breadcrumb: 'strongholdunits' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrongholdRoutingModule {}
