import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfernoComponent } from './inferno.component';

const routes: Routes = [
  {
    path: '',
    component: InfernoComponent,
  },
  {
    path: 'infernobuildings',
    loadChildren: () =>
      import('./buildings/infernobuildings.module').then(
        (m) => m.InfernoBuildingsModule
      ),
    data: { breadcrumb: 'Buildings' },
  },
  {
    path: 'infernoheroes',
    loadChildren: () =>
      import('./heroes/infernoheroes.module').then(
        (m) => m.InfernoHeroesModule
      ),
    data: { breadcrumb: 'Heroes' },
  },
  {
    path: 'infernounits',
    loadChildren: () =>
      import('./units/infernounits.module').then((m) => m.InfernoUnitsModule),
    data: { breadcrumb: 'Units' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfernoRoutingModule {}
