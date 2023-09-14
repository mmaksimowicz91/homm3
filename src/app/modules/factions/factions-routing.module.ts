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
    data: { breadcrumb: 'Castle' },
  },
  {
    path: 'rampart',
    loadChildren: () =>
      import('./rampart/rampart.module').then((m) => m.RampartModule),
    data: { breadcrumb: 'Rampart' },
  },
  {
    path: 'inferno',
    loadChildren: () =>
      import('./inferno/inferno.module').then((m) => m.InfernoModule),
    data: { breadcrumb: 'Inferno' },
  },
  {
    path: 'tower',
    loadChildren: () =>
      import('./tower/tower.module').then((m) => m.TowerModule),
    data: { breadcrumb: 'Tower' },
  },
  {
    path: 'necropolis',
    loadChildren: () =>
      import('./necropolis/necropolis.module').then((m) => m.NecropolisModule),
    data: { breadcrumb: 'Necropolis' },
  },
  {
    path: 'stronghold',
    loadChildren: () =>
      import('./stronghold/stronghold.module').then((m) => m.StrongholdModule),
    data: { breadcrumb: 'Stronghold' },
  },
  {
    path: 'dungeon',
    loadChildren: () =>
      import('./dungeon/dungeon.module').then((m) => m.DungeonModule),
    data: { breadcrumb: 'Dungeon' },
  },
  {
    path: 'fortress',
    loadChildren: () =>
      import('./fortress/fortress.module').then((m) => m.FortressModule),
    data: { breadcrumb: 'Fortress' },
  },
  {
    path: 'conflux',
    loadChildren: () =>
      import('./conflux/conflux.module').then((m) => m.ConfluxModule),
    data: { breadcrumb: 'Conflux' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactionsRoutingModule {}
