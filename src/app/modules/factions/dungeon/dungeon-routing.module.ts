import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonComponent } from './dungeon.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonComponent,
    children: [
      {
        path: 'dungeonbuildings',
        loadChildren: () =>
          import('./buildings/dungeonbuildings.module').then(
            (m) => m.DungeonBuildingsModule
          ),
      },
      {
        path: 'dungeonheroes',
        loadChildren: () =>
          import('./heroes/dungeonheroes.module').then(
            (m) => m.DungeonHeroesModule
          ),
      },
      {
        path: 'dungeonunits',
        loadChildren: () =>
          import('./units/dungeonunits.module').then(
            (m) => m.DungeonUnitsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DungeonRoutingModule {}
