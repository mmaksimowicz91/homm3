import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { FactionsComponent } from './modules/factions/factions.component';
import { CastleComponent } from './modules/factions/castle/castle.component';
import { CastleBuildingsComponent } from './modules/factions/castle/buildings/castlebuildings.component';
import { CastleHeroesComponent } from './modules/factions/castle/heroes/castleheroes.component';
import { CastleUnitsComponent } from './modules/factions/castle/units/castleunits.component';
import { RampartComponent } from './modules/factions/rampart/rampart.component';
import { RampartBuildingsComponent } from './modules/factions/rampart/buildings/rampartbuildings.component';
import { RampartHeroesComponent } from './modules/factions/rampart/heroes/rampartheroes.component';
import { RampartUnitsComponent } from './modules/factions/rampart/units/rampartunits.component';
import { TowerComponent } from './modules/factions/tower/tower.component';
import { TowerBuildingsComponent } from './modules/factions/tower/buildings/towerbuildings.component';
import { TowerHeroesComponent } from './modules/factions/tower/heroes/towerheroes.component';
import { TowerUnitsComponent } from './modules/factions/tower/units/towerunits.component';
import { InfernoComponent } from './modules/factions/inferno/inferno.component';
import { InfernoBuildingsComponent } from './modules/factions/inferno/buildings/infernobuildings.component';
import { InfernoHeroesComponent } from './modules/factions/inferno/heroes/infernoheroes.component';
import { InfernoUnitsComponent } from './modules/factions/inferno/units/infernounits.component';
import { NecropolisComponent } from './modules/factions/necropolis/necropolis.component';
import { NecropolisBuildingsComponent } from './modules/factions/necropolis/buildings/necropolisbuildings.component';
import { NecropolisHeroesComponent } from './modules/factions/necropolis/heroes/necropolisheroes.component';
import { NecropolisUnitsComponent } from './modules/factions/necropolis/units/necropolisunits.component';
import { DungeonComponent } from './modules/factions/dungeon/dungeon.component';
import { DungeonBuildingsComponent } from './modules/factions/dungeon/buildings/dungeonbuildings.component';
import { DungeonHeroesComponent } from './modules/factions/dungeon/heroes/dungeonheroes.component';
import { DungeonUnitsComponent } from './modules/factions/dungeon/units/dungeonunits.component';
import { StrongholdComponent } from './modules/factions/stronghold/stronghold.component';
import { StrongholdBuildingsComponent } from './modules/factions/stronghold/buildings/strongholdbuildings.component';
import { StrongholdHeroesComponent } from './modules/factions/stronghold/heroes/strongholdheroes.component';
import { StrongholdUnitsComponent } from './modules/factions/stronghold/units/strongholdunits.component';
import { ConfluxComponent } from './modules/factions/conflux/conflux.component';
import { ConfluxBuildingsComponent } from './modules/factions/conflux/buildings/confluxbuildings.component';
import { ConfluxHeroesComponent } from './modules/factions/conflux/heroes/confluxheroes.component';
import { ConfluxUnitsComponent } from './modules/factions/conflux/units/confluxunits.component';
import { FortressComponent } from './modules/factions/fortress/fortress.component';
import { FortressBuildingsComponent } from './modules/factions/fortress/buildings/fortressbuildings.component';
import { FortressHeroesComponent } from './modules/factions/fortress/heroes/fortressheroes.component';
import { FortressUnitsComponent } from './modules/factions/fortress/units/fortressunits.component';
import { DungeonHeroesRoutingModule } from './modules/factions/dungeon/heroes/dungeonheroes.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
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
                  ).then((m) => m.CastleBuildingsRoutingModule),
              },
              {
                path: 'castleheroes',
                loadChildren: () =>
                  import(
                    './modules/factions/castle/heroes/castleheroes.module'
                  ).then((m) => m.CastleHeroesRoutingModule),
              },
              {
                path: 'castleunits',
                loadChildren: () =>
                  import(
                    './modules/factions/castle/units/castleunits.module'
                  ).then((m) => m.CastleUnitsRoutingModule),
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
                  ).then((m) => m.RampartBuildingsRoutingModule),
              },
              {
                path: 'rampartheroes',
                loadChildren: () =>
                  import(
                    './modules/factions/rampart/heroes/rampartheroes.module'
                  ).then((m) => m.RampartHeroesRoutingModule),
              },
              {
                path: 'rampartunits',
                loadChildren: () =>
                  import(
                    './modules/factions/rampart/units/rampartunits.module'
                  ).then((m) => m.RampartUnitsRoutingModule),
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
                  ).then((m) => m.InfernoBuildingsRoutingModule),
              },
              {
                path: 'infernoheroes',
                loadChildren: () =>
                  import(
                    './modules/factions/inferno/heroes/infernoheroes.module'
                  ).then((m) => m.InfernoHeroesRoutingModule),
              },
              {
                path: 'infernounits',
                loadChildren: () =>
                  import(
                    './modules/factions/inferno/units/infernounits.module'
                  ).then((m) => m.InfernoUnitsRoutingModule),
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
                  ).then((m) => m.TowerBuildingsRoutingModule),
              },
              {
                path: 'towerheroes',
                loadChildren: () =>
                  import(
                    './modules/factions/tower/heroes/towerheroes.module'
                  ).then((m) => m.TowerHeroesRoutingModule),
              },
              {
                path: 'towerunits',
                loadChildren: () =>
                  import(
                    './modules/factions/tower/units/towerunits.module'
                  ).then((m) => m.TowerUnitsRoutingModule),
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
                  ).then((m) => m.NecropolisBuildingsRoutingModule),
              },
              {
                path: 'necropolisheroes',
                loadChildren: () =>
                  import(
                    './modules/factions/necropolis/heroes/necropolisheroes.module'
                  ).then((m) => m.NecropolisHeroesRoutingModule),
              },
              {
                path: 'necropolisunits',
                loadChildren: () =>
                  import(
                    './modules/factions/necropolis/units/necropolisunits.module'
                  ).then((m) => m.NecropolisUnitsRoutingModule),
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
                  ).then((m) => m.StrongholdBuildingsRoutingModule),
              },
              {
                path: 'strongholdheroes',
                loadChildren: () =>
                  import(
                    './modules/factions/stronghold/heroes/strongholdheroes.module'
                  ).then((m) => m.StrongholdHeroesRoutingModule),
              },
              {
                path: 'strongholdunits',
                loadChildren: () =>
                  import(
                    './modules/factions/stronghold/units/strongholdunits.module'
                  ).then((m) => m.StrongholdUnitsRoutingModule),
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
                  ).then((m) => m.DungeonBuildingsRoutingModule),
              },
              {
                path: 'dungeonheroes',
                loadChildren: () =>
                  import(
                    './modules/factions/dungeon/heroes/dungeonheroes.module'
                  ).then((m) => m.DungeonHeroesRoutingModule),
              },
              {
                path: 'dungeonunits',
                loadChildren: () =>
                  import(
                    './modules/factions/dungeon/units/dungeonunits.module'
                  ).then((m) => m.DungeonUnitsRoutingModule),
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
                  ).then((m) => m.FortressBuildingsRoutingModule),
              },
              {
                path: 'fortressheroes',
                loadChildren: () =>
                  import(
                    './modules/factions/fortress/heroes/fortressheroes.module'
                  ).then((m) => m.FortressHeroesRoutingModule),
              },
              {
                path: 'fortressunits',
                loadChildren: () =>
                  import(
                    './modules/factions/fortress/units/fortressunits.module'
                  ).then((m) => m.FortressUnitsRoutingModule),
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
                  ).then((m) => m.ConfluxBuildingsRoutingModule),
              },
              {
                path: 'confluxheroes',
                loadChildren: () =>
                  import(
                    './modules/factions/conflux/heroes/confluxheroes.module'
                  ).then((m) => m.ConfluxHeroesRoutingModule),
              },
              {
                path: 'confluxunits',
                loadChildren: () =>
                  import(
                    './modules/factions/conflux/units/confluxunits.module'
                  ).then((m) => m.ConfluxeUnitsRoutingModule),
              },
            ],
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
