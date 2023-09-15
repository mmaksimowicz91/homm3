import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DwellingsComponent } from './dwellings.component';

const routes: Routes = [
  {
    path: '',
    component: DwellingsComponent,
  },
  {
    path: 'castle-dwelling',
    loadChildren: () =>
      import('./castle-dwelling/castle-dwelling.module').then(
        (m) => m.CastleDwellingModule
      ),
    data: { breadcrumb: 'Castle Dwellings' },
  },
  {
    path: 'conflux-dwelling',
    loadChildren: () =>
      import('./conflux-dwelling/conflux-dwelling.module').then(
        (m) => m.ConfluxDwellingModule
      ),
    data: { breadcrumb: 'Conflux Dwellings' },
  },
  {
    path: 'dungeon-dwelling',
    loadChildren: () =>
      import('./dungeon-dwelling/dungeon-dwelling.module').then(
        (m) => m.DungeonDwellingModule
      ),
    data: { breadcrumb: 'Dungeon Dwellings' },
  },
  {
    path: 'fortress-dwelling',
    loadChildren: () =>
      import('./fortress-dwelling/fortress-dwelling.module').then(
        (m) => m.FortressDwellingModule
      ),
    data: { breadcrumb: 'Fortress Dwellings' },
  },
  {
    path: 'inferno-dwelling',
    loadChildren: () =>
      import('./inferno-dwelling/inferno-dwelling.module').then(
        (m) => m.InfernoDwellingModule
      ),
    data: { breadcrumb: 'Inferno Dwellings' },
  },
  {
    path: 'necropolis-dwelling',
    loadChildren: () =>
      import('./necropolis-dwelling/necropolis-dwelling.module').then(
        (m) => m.NecropolisDwellingModule
      ),
    data: { breadcrumb: 'FNecropolis Dwellings' },
  },
  {
    path: 'neutral-dwelling',
    loadChildren: () =>
      import('./neutral-dwelling/neutral-dwelling.module').then(
        (m) => m.NeutralDwellingModule
      ),
    data: { breadcrumb: 'Neutral Dwellings' },
  },
  {
    path: 'rampart-dwelling',
    loadChildren: () =>
      import('./rampart-dwelling/rampart-dwelling.module').then(
        (m) => m.RampartDwellingModule
      ),
    data: { breadcrumb: 'Rampart Dwellings' },
  },
  {
    path: 'stronghold-dwelling',
    loadChildren: () =>
      import('./stronghold-dwelling/stronghold-dwelling.module').then(
        (m) => m.StrongholdDwellingModule
      ),
    data: { breadcrumb: 'Stronghold Dwellings' },
  },
  {
    path: 'tower-dwelling',
    loadChildren: () =>
      import('./tower-dwelling/tower-dwelling.module').then(
        (m) => m.TowerDwellingModule
      ),
    data: { breadcrumb: 'Tower Dwellings' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DwellingsRoutingModule {}
