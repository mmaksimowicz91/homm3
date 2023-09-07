import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactionsComponent } from './factions.component';

const routes: Routes = [
  {
    path: '',
    component: FactionsComponent,
    children: [
      {
        path: 'castle',
        loadChildren: () =>
          import('./castle/castle.module').then((m) => m.CastleModule),
      },
      {
        path: 'rampart',
        loadChildren: () =>
          import('./rampart/rampart.module').then((m) => m.RampartModule),
      },
      {
        path: 'inferno',
        loadChildren: () =>
          import('./inferno/inferno.module').then((m) => m.InfernoModule),
      },
      {
        path: 'tower',
        loadChildren: () =>
          import('./tower/tower.module').then((m) => m.TowerModule),
      },
      {
        path: 'necropolis',
        loadChildren: () =>
          import('./necropolis/necropolis.module').then(
            (m) => m.NecropolisModule
          ),
      },
      {
        path: 'stronghold',
        loadChildren: () =>
          import('./stronghold/stronghold.module').then(
            (m) => m.StrongholdModule
          ),
      },
      {
        path: 'dungeon',
        loadChildren: () =>
          import('./dungeon/dungeon.module').then((m) => m.DungeonModule),
      },
      {
        path: 'fortress',
        loadChildren: () =>
          import('./fortress/fortress.module').then((m) => m.FortressModule),
      },
      {
        path: 'conflux',
        loadChildren: () =>
          import('./conflux/conflux.module').then((m) => m.ConfluxModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactionsRoutingModule {}
