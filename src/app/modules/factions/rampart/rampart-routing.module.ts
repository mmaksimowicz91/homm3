import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RampartComponent } from './rampart.component';

const routes: Routes = [
  {
    path: '',
    component: RampartComponent,
    children: [
      {
        path: 'rampartbuildings',
        loadChildren: () =>
          import('./buildings/rampartbuildings.module').then(
            (m) => m.RampartBuildingsModule
          ),
      },
      {
        path: 'rampartheroes',
        loadChildren: () =>
          import('./heroes/rampartheroes.module').then(
            (m) => m.RampartHeroesModule
          ),
      },
      {
        path: 'rampartunits',
        loadChildren: () =>
          import('./units/rampartunits.module').then(
            (m) => m.RampartUnitsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RampartRoutingModule {}
