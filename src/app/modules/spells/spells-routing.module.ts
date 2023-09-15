import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellsComponent } from './spells.component';

const routes: Routes = [
  {
    path: '',
    component: SpellsComponent,
  },
  {
    path: 'airspells',
    loadChildren: () =>
      import('./airspells/airspells.module').then((m) => m.AirSpellsModule),
    data: { breadcrumb: 'Air Spells' },
  },
  {
    path: 'earthspells',
    loadChildren: () =>
      import('./earthspells/earthspells.module').then(
        (m) => m.EarthSpellsModule
      ),
    data: { breadcrumb: 'Earth Spells' },
  },
  {
    path: 'waterspells',
    loadChildren: () =>
      import('./waterspells/waterspells.module').then(
        (m) => m.WaterSpellsModule
      ),
    data: { breadcrumb: 'Water Spells' },
  },
  {
    path: 'firespells',
    loadChildren: () =>
      import('./firespells/firespells.module').then((m) => m.FireSpellsModule),
    data: { breadcrumb: 'Fire Spells' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpellsRoutingModule {}
