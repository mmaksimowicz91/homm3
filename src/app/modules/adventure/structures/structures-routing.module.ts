import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuresComponent } from './structures.component';

const routes: Routes = [
  {
    path: '',
    component: StructuresComponent,
  },
  {
    path: 'att-modifiers',
    loadChildren: () =>
      import('./att-modifiers/att-modifiers.module').then(
        (m) => m.AttModifiersModule
      ),
    data: { breadcrumb: 'Attribute Modifiers' },
  },
  {
    path: 'banks',
    loadChildren: () =>
      import('./banks/banks.module').then((m) => m.BanksModule),
    data: { breadcrumb: 'Creature Banks' },
  },
  {
    path: 'mines',
    loadChildren: () =>
      import('./mines/mines.module').then((m) => m.MinesModule),
    data: { breadcrumb: 'Mines' },
  },
  {
    path: 'treasures',
    loadChildren: () =>
      import('./treasures/treasures.module').then((m) => m.TreasuresModule),
    data: { breadcrumb: 'Treasures' },
  },
  {
    path: 'travel-misc',
    loadChildren: () =>
      import('./travel-misc/travel-misc.module').then(
        (m) => m.TravelMiscModule
      ),
    data: { breadcrumb: 'Travel and Miscellaneous' },
  },
  {
    path: 'dwellings',
    loadChildren: () =>
      import('./dwellings/dwellings.module').then((m) => m.DwellingsModule),
    data: { breadcrumb: 'Dwellings' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructuresRoutingModule {}
