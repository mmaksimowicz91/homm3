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
  },
  {
    path: 'castle',
    component: CastleComponent,
  },
  {
    path: 'castlebuildings',
    component: CastleBuildingsComponent,
  },
  {
    path: 'castleheroes',
    component: CastleHeroesComponent,
  },
  {
    path: 'castleunits',
    component: CastleUnitsComponent,
  },
  {
    path: 'rampart',
    component: RampartComponent,
  },
  {
    path: 'rampartbuildings',
    component: RampartBuildingsComponent,
  },
  {
    path: 'rampartheroes',
    component: RampartHeroesComponent,
  },
  {
    path: 'rampartunits',
    component: RampartUnitsComponent,
  },
  {
    path: 'tower',
    component: TowerComponent,
  },
  {
    path: 'towerbuildings',
    component: TowerBuildingsComponent,
  },
  {
    path: 'towerheroes',
    component: TowerHeroesComponent,
  },
  {
    path: 'towerunits',
    component: TowerUnitsComponent,
  },
  {
    path: 'inferno',
    component: InfernoComponent,
  },
  {
    path: 'infernobuildings',
    component: InfernoBuildingsComponent,
  },
  {
    path: 'infernoheroes',
    component: InfernoHeroesComponent,
  },
  {
    path: 'infernounits',
    component: InfernoUnitsComponent,
  },
  {
    path: 'necropolis',
    component: NecropolisComponent,
  },
  {
    path: 'necropolisbuildings',
    component: NecropolisBuildingsComponent,
  },
  {
    path: 'necropolisheroes',
    component: NecropolisHeroesComponent,
  },
  {
    path: 'necropolisunits',
    component: NecropolisUnitsComponent,
  },
  {
    path: 'dungeon',
    component: DungeonComponent,
  },
  {
    path: 'dungeonbuildings',
    component: DungeonBuildingsComponent,
  },
  {
    path: 'dungeonheroes',
    component: DungeonHeroesComponent,
  },
  {
    path: 'dungeonunits',
    component: DungeonUnitsComponent,
  },
  {
    path: 'stronghold',
    component: StrongholdComponent,
  },
  {
    path: 'strongholdbuildings',
    component: StrongholdBuildingsComponent,
  },
  {
    path: 'strongholdheroes',
    component: StrongholdHeroesComponent,
  },
  {
    path: 'strongholdunits',
    component: StrongholdUnitsComponent,
  },
  {
    path: 'conflux',
    component: ConfluxComponent,
  },
  {
    path: 'confluxbuildings',
    component: ConfluxBuildingsComponent,
  },
  {
    path: 'confluxheroes',
    component: ConfluxHeroesComponent,
  },
  {
    path: 'confluxunits',
    component: ConfluxUnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
