import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactionsComponent } from './factions.component';

const routes: Routes = [
  {
    path: '',
    component: FactionsComponent,
  },
  {
    path: 'castle',
    loadChildren: () =>
      import('./castle/castle.module').then((m) => m.CastleModule),
    data: { breadcrumb: 'castle' },
  },
  {
    path: 'rampart',
    loadChildren: () =>
      import('./rampart/rampart.module').then((m) => m.RampartModule),
    data: { breadcrumb: 'rampart' },
  },
  {
    path: 'inferno',
    loadChildren: () =>
      import('./inferno/inferno.module').then((m) => m.InfernoModule),
    data: { breadcrumb: 'inferno' },
  },
  {
    path: 'tower',
    loadChildren: () =>
      import('./tower/tower.module').then((m) => m.TowerModule),
    data: { breadcrumb: 'tower' },
  },
  {
    path: 'necropolis',
    loadChildren: () =>
      import('./necropolis/necropolis.module').then((m) => m.NecropolisModule),
    data: { breadcrumb: 'necropolis' },
  },
  {
    path: 'stronghold',
    loadChildren: () =>
      import('./stronghold/stronghold.module').then((m) => m.StrongholdModule),
    data: { breadcrumb: 'stronghold' },
  },
  {
    path: 'dungeon',
    loadChildren: () =>
      import('./dungeon/dungeon.module').then((m) => m.DungeonModule),
    data: { breadcrumb: 'dungeon' },
  },
  {
    path: 'fortress',
    loadChildren: () =>
      import('./fortress/fortress.module').then((m) => m.FortressModule),
    data: { breadcrumb: 'fortress' },
  },
  {
    path: 'conflux',
    loadChildren: () =>
      import('./conflux/conflux.module').then((m) => m.ConfluxModule),
    data: { breadcrumb: 'conflux' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactionsRoutingModule {}
