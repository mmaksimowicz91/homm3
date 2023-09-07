import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrongholdComponent } from './stronghold.component';
const routes: Routes = [
  {
    path: '',
    component: StrongholdComponent,
    children: [
      {
        path: 'strongholdbuildings',
        loadChildren: () =>
          import('./buildings/strongholdbuildings.module').then(
            (m) => m.StrongholdBuildingsModule
          ),
      },
      {
        path: 'strongholdheroes',
        loadChildren: () =>
          import('./heroes/strongholdheroes.module').then(
            (m) => m.StrongholdHeroesModule
          ),
      },
      {
        path: 'strongholdunits',
        loadChildren: () =>
          import('./units/strongholdunits.module').then(
            (m) => m.StrongholdUnitsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrongholdRoutingModule {}
