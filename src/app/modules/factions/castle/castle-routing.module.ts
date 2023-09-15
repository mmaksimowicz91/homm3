import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastleComponent } from './castle.component';

const routes: Routes = [
  {
    path: '',
    component: CastleComponent,
  },
  {
    path: 'castlebuildings',
    loadChildren: () =>
      import('./buildings/castlebuildings.module').then(
        (m) => m.CastleBuildingsModule
      ),
    data: { breadcrumb: 'castlebuildings' },
  },
  {
    path: 'castleheroes',
    loadChildren: () =>
      import('./heroes/castleheroes.module').then((m) => m.CastleHeroesModule),
    data: { breadcrumb: 'castleheroes' },
  },
  {
    path: 'castleunits',
    loadChildren: () =>
      import('./units/castleunits.module').then((m) => m.CastleUnitsModule),
    data: { breadcrumb: 'castleunits' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastleRoutingModule {}
