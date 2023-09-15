import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonComponent } from './dungeon.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonComponent,
  },
  {
    path: 'dungeonbuildings',
    loadChildren: () =>
      import('./buildings/dungeonbuildings.module').then(
        (m) => m.DungeonBuildingsModule
      ),
    data: { breadcrumb: 'dungeonbuildings' },
  },
  {
    path: 'dungeonheroes',
    loadChildren: () =>
      import('./heroes/dungeonheroes.module').then(
        (m) => m.DungeonHeroesModule
      ),
    data: { breadcrumb: 'dungeonheroes' },
  },
  {
    path: 'dungeonunits',
    loadChildren: () =>
      import('./units/dungeonunits.module').then((m) => m.DungeonUnitsModule),
    data: { breadcrumb: 'dungeonunits' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DungeonRoutingModule {}
