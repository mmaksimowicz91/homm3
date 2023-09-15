import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventureComponent } from './adventure.component';

const routes: Routes = [
  {
    path: '',
    component: AdventureComponent,
  },
  {
    path: 'neutral-units',
    loadChildren: () =>
      import('./neutral-units/neutral-units.module').then(
        (m) => m.NeutralUnitsModule
      ),
    data: { breadcrumb: 'neutral-units' },
  },
  {
    path: 'structures',
    loadChildren: () =>
      import('./structures/structures.module').then((m) => m.StructuresModule),
    data: { breadcrumb: 'structures' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventureRoutingModule {}
