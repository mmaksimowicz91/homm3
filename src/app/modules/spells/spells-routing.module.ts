import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellsComponent } from './spells.component';

const routes: Routes = [
  {
    path: '',
    component: SpellsComponent,
    children: [
      {
        path: 'airspells',
        loadChildren: () =>
          import('./airspells/airspells.module').then((m) => m.AirSpellsModule),
      },
      {
        path: 'earthspells',
        loadChildren: () =>
          import('./earthspells/earthspells.module').then(
            (m) => m.EarthSpellsModule
          ),
      },
      {
        path: 'waterspells',
        loadChildren: () =>
          import('./waterspells/waterspells.module').then(
            (m) => m.WaterSpellsModule
          ),
      },
      {
        path: 'firespells',
        loadChildren: () =>
          import('./firespells/firespells.module').then(
            (m) => m.FireSpellsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpellsRoutingModule {}
