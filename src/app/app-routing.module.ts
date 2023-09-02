import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastleComponent } from './modules/factions/castle/castle.component';
import { ConfluxComponent } from './modules/factions/conflux/conflux.component';
import { DungeonComponent } from './modules/factions/dungeon/dungeon.component';
import { FactionsComponent } from './modules/factions/factions.component';
import { FortressComponent } from './modules/factions/fortress/fortress.component';
import { InfernoComponent } from './modules/factions/inferno/inferno.component';
import { NecropolisComponent } from './modules/factions/necropolis/necropolis.component';
import { RampartComponent } from './modules/factions/rampart/rampart.component';
import { StrongholdComponent } from './modules/factions/stronghold/stronghold.component';
import { TowerComponent } from './modules/factions/tower/tower.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'factions',
    component: FactionsComponent,
    children: [
      {
        path: 'castle',
        component: CastleComponent,
        children: [
          {
            path: 'castlebuildings',
            loadChildren: () =>
              import(
                './modules/factions/castle/buildings/castlebuildings.module'
              ).then((m) => m.CastleBuildingsModule),
          },
          {
            path: 'castleheroes',
            loadChildren: () =>
              import(
                './modules/factions/castle/heroes/castleheroes.module'
              ).then((m) => m.CastleHeroesModule),
          },
          {
            path: 'castleunits',
            loadChildren: () =>
              import('./modules/factions/castle/units/castleunits.module').then(
                (m) => m.CastleUnitsModule
              ),
          },
        ],
      },
      {
        path: 'rampart',
        component: RampartComponent,
        children: [
          {
            path: 'rampartbuildings',
            loadChildren: () =>
              import(
                './modules/factions/rampart/buildings/rampartbuildings.module'
              ).then((m) => m.RampartBuildingsModule),
          },
          {
            path: 'rampartheroes',
            loadChildren: () =>
              import(
                './modules/factions/rampart/heroes/rampartheroes.module'
              ).then((m) => m.RampartHeroesModule),
          },
          {
            path: 'rampartunits',
            loadChildren: () =>
              import(
                './modules/factions/rampart/units/rampartunits.module'
              ).then((m) => m.RampartUnitsModule),
          },
        ],
      },
      {
        path: 'inferno',
        component: InfernoComponent,
        children: [
          {
            path: 'infernobuildings',
            loadChildren: () =>
              import(
                './modules/factions/inferno/buildings/infernobuildings.module'
              ).then((m) => m.InfernoBuildingsModule),
          },
          {
            path: 'infernoheroes',
            loadChildren: () =>
              import(
                './modules/factions/inferno/heroes/infernoheroes.module'
              ).then((m) => m.InfernoHeroesModule),
          },
          {
            path: 'infernounits',
            loadChildren: () =>
              import(
                './modules/factions/inferno/units/infernounits.module'
              ).then((m) => m.InfernoUnitsModule),
          },
        ],
      },
      {
        path: 'tower',
        component: TowerComponent,
        children: [
          {
            path: 'towerbuildings',
            loadChildren: () =>
              import(
                './modules/factions/tower/buildings/towerbuildings.module'
              ).then((m) => m.TowerBuildingsModule),
          },
          {
            path: 'towerheroes',
            loadChildren: () =>
              import('./modules/factions/tower/heroes/towerheroes.module').then(
                (m) => m.TowerHeroesModule
              ),
          },
          {
            path: 'towerunits',
            loadChildren: () =>
              import('./modules/factions/tower/units/towerunits.module').then(
                (m) => m.TowerUnitsModule
              ),
          },
        ],
      },
      {
        path: 'necropolis',
        component: NecropolisComponent,
        children: [
          {
            path: 'necropolisbuildings',
            loadChildren: () =>
              import(
                './modules/factions/necropolis/buildings/necropolisbuilding.module'
              ).then((m) => m.NecropolisBuildingsModule),
          },
          {
            path: 'necropolisheroes',
            loadChildren: () =>
              import(
                './modules/factions/necropolis/heroes/necropolisheroes.module'
              ).then((m) => m.NecropolisHeroesModule),
          },
          {
            path: 'necropolisunits',
            loadChildren: () =>
              import(
                './modules/factions/necropolis/units/necropolisunits.module'
              ).then((m) => m.NecropolisUnitsModule),
          },
        ],
      },
      {
        path: 'stronghold',
        component: StrongholdComponent,
        children: [
          {
            path: 'strongholdbuildings',
            loadChildren: () =>
              import(
                './modules/factions/stronghold/buildings/strongholdbuildings.module'
              ).then((m) => m.StrongholdBuildingsModule),
          },
          {
            path: 'strongholdheroes',
            loadChildren: () =>
              import(
                './modules/factions/stronghold/heroes/strongholdheroes.module'
              ).then((m) => m.StrongholdHeroesModule),
          },
          {
            path: 'strongholdunits',
            loadChildren: () =>
              import(
                './modules/factions/stronghold/units/strongholdunits.module'
              ).then((m) => m.StrongholdUnitsModule),
          },
        ],
      },
      {
        path: 'dungeon',
        component: DungeonComponent,
        children: [
          {
            path: 'dungeonbuildings',
            loadChildren: () =>
              import(
                './modules/factions/dungeon/buildings/dungeonbuildings.module'
              ).then((m) => m.DungeonBuildingsModule),
          },
          {
            path: 'dungeonheroes',
            loadChildren: () =>
              import(
                './modules/factions/dungeon/heroes/dungeonheroes.module'
              ).then((m) => m.DungeonHeroesModule),
          },
          {
            path: 'dungeonunits',
            loadChildren: () =>
              import(
                './modules/factions/dungeon/units/dungeonunits.module'
              ).then((m) => m.DungeonUnitsModule),
          },
        ],
      },
      {
        path: 'fortress',
        component: FortressComponent,
        children: [
          {
            path: 'fortressbuildings',
            loadChildren: () =>
              import(
                './modules/factions/fortress/buildings/fortressbuildings.module'
              ).then((m) => m.FortressBuildingsModule),
          },
          {
            path: 'fortressheroes',
            loadChildren: () =>
              import(
                './modules/factions/fortress/heroes/fortressheroes.module'
              ).then((m) => m.FortressHeroesModule),
          },
          {
            path: 'fortressunits',
            loadChildren: () =>
              import(
                './modules/factions/fortress/units/fortressunits.module'
              ).then((m) => m.FortressUnitsModule),
          },
        ],
      },
      {
        path: 'conflux',
        component: ConfluxComponent,
        children: [
          {
            path: 'confluxbuildings',
            loadChildren: () =>
              import(
                './modules/factions/conflux/buildings/confluxbuildings.module'
              ).then((m) => m.ConfluxBuildingsModule),
          },
          {
            path: 'confluxheroes',
            loadChildren: () =>
              import(
                './modules/factions/conflux/heroes/confluxheroes.module'
              ).then((m) => m.ConfluxHeroesModule),
          },
          {
            path: 'confluxunits',
            loadChildren: () =>
              import(
                './modules/factions/conflux/units/confluxunits.module'
              ).then((m) => m.ConfluxUnitsModule),
          },
        ],
      },
    ],
  },

  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'factions',
  //   component: FactionsComponent,
  // },
  // {
  //   path: 'castle',
  //   component: CastleComponent,
  //   children: [
  //     {
  //       path: 'castle/castlebuildings',
  //       component: CastleBuildingsComponent,
  //     },
  //     {
  //       path: 'castle/castleheroes',
  //       component: CastleHeroesComponent,
  //     },
  //     {
  //       path: 'castle/castleunits',
  //       component: CastleUnitsComponent,
  //     },
  //   ],
  // },

  // {
  //   path: 'rampart',
  //   component: RampartComponent,
  // },
  // {
  //   path: 'rampartbuildings',
  //   component: RampartBuildingsComponent,
  // },
  // {
  //   path: 'rampartheroes',
  //   component: RampartHeroesComponent,
  // },
  // {
  //   path: 'rampartunits',
  //   component: RampartUnitsComponent,
  // },
  // {
  //   path: 'tower',
  //   component: TowerComponent,
  // },
  // {
  //   path: 'towerbuildings',
  //   component: TowerBuildingsComponent,
  // },
  // {
  //   path: 'towerheroes',
  //   component: TowerHeroesComponent,
  // },
  // {
  //   path: 'towerunits',
  //   component: TowerUnitsComponent,
  // },
  // {
  //   path: 'inferno',
  //   component: InfernoComponent,
  // },
  // {
  //   path: 'infernobuildings',
  //   component: InfernoBuildingsComponent,
  // },
  // {
  //   path: 'infernoheroes',
  //   component: InfernoHeroesComponent,
  // },
  // {
  //   path: 'infernounits',
  //   component: InfernoUnitsComponent,
  // },
  // {
  //   path: 'necropolis',
  //   component: NecropolisComponent,
  // },
  // {
  //   path: 'necropolisbuildings',
  //   component: NecropolisBuildingsComponent,
  // },
  // {
  //   path: 'necropolisheroes',
  //   component: NecropolisHeroesComponent,
  // },
  // {
  //   path: 'necropolisunits',
  //   component: NecropolisUnitsComponent,
  // },
  // {
  //   path: 'dungeon',
  //   component: DungeonComponent,
  // },
  // {
  //   path: 'dungeonbuildings',
  //   component: DungeonBuildingsComponent,
  // },
  // {
  //   path: 'dungeonheroes',
  //   component: DungeonHeroesComponent,
  // },
  // {
  //   path: 'dungeonunits',
  //   component: DungeonUnitsComponent,
  // },
  // {
  //   path: 'stronghold',
  //   component: StrongholdComponent,
  // },
  // {
  //   path: 'strongholdbuildings',
  //   component: StrongholdBuildingsComponent,
  // },
  // {
  //   path: 'strongholdheroes',
  //   component: StrongholdHeroesComponent,
  // },
  // {
  //   path: 'strongholdunits',
  //   component: StrongholdUnitsComponent,
  // },
  // {
  //   path: 'fortress',
  //   component: FortressComponent,
  // },
  // {
  //   path: 'fortressbuildings',
  //   component: FortressBuildingsComponent,
  // },
  // {
  //   path: 'fortressheroes',
  //   component: FortressHeroesComponent,
  // },
  // {
  //   path: 'fortressunits',
  //   component: FortressUnitsComponent,
  // },
  // {
  //   path: 'conflux',
  //   component: ConfluxComponent,
  // },
  // {
  //   path: 'confluxbuildings',
  //   component: ConfluxBuildingsComponent,
  // },
  // {
  //   path: 'confluxheroes',
  //   component: ConfluxHeroesComponent,
  // },
  // {
  //   path: 'confluxunits',
  //   component: ConfluxUnitsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
