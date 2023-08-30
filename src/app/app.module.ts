import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NecropolisComponent } from './modules/factions/necropolis/necropolis.component';
import { RampartComponent } from './modules/factions/rampart/rampart.component';
import { StrongholdComponent } from './modules/factions/stronghold/stronghold.component';
import { TowerComponent } from './modules/factions/tower/tower.component';
import { CastleBuildingsComponent } from './modules/factions/castle/buildings/castlebuildings.component';
import { CastleUnitsComponent } from './modules/factions/castle/units/castleunits.component';
import { CastleHeroesComponent } from './modules/factions/castle/heroes/castleheroes.component';
import { FactionsComponent } from './modules/factions/factions.component';

import { MatTableModule } from '@angular/material/table';
import { RampartHeroesComponent } from './modules/factions/rampart/heroes/rampartheroes.component';
import { RampartBuildingsComponent } from './modules/factions/rampart/buildings/rampartbuildings.component';
import { RampartUnitsComponent } from './modules/factions/rampart/units/rampartunits.component';
import { TowerUnitsComponent } from './modules/factions/tower/units/towerunits.component';
import { TowerBuildingsComponent } from './modules/factions/tower/buildings/towerbuildings.component';
import { TowerHeroesComponent } from './modules/factions/tower/heroes/towerheroes.component';
import { InfernoUnitsComponent } from './modules/factions/inferno/units/infernounits.component';
import { InfernoBuildingsComponent } from './modules/factions/inferno/buildings/infernobuildings.component';
import { InfernoHeroesComponent } from './modules/factions/inferno/heroes/infernoheroes.component';
import { NecropolisUnitsComponent } from './modules/factions/necropolis/units/necropolisunits.component';
import { NecropolisHeroesComponent } from './modules/factions/necropolis/heroes/necropolisheroes.component';
import { NecropolisBuildingsComponent } from './modules/factions/necropolis/buildings/necropolisbuildings.component';
import { DungeonBuildingsComponent } from './modules/factions/dungeon/buildings/dungeonbuildings.component';
import { DungeonUnitsComponent } from './modules/factions/dungeon/units/dungeonunits.component';
import { DungeonHeroesComponent } from './modules/factions/dungeon/heroes/dungeonheroes.component';
import { StrongholdUnitsComponent } from './modules/factions/stronghold/units/strongholdunits.component';
import { StrongholdHeroesComponent } from './modules/factions/stronghold/heroes/strongholdheroes.component';
import { StrongholdBuildingsComponent } from './modules/factions/stronghold/buildings/strongholdbuildings.component';
import { ConfluxBuildingsComponent } from './modules/factions/conflux/buildings/confluxbuildings.component';
import { ConfluxUnitsComponent } from './modules/factions/conflux/units/confluxunits.component';
import { ConfluxHeroesComponent } from './modules/factions/conflux/heroes/confluxheroes.component';
import { FortressBuildingsComponent } from './modules/factions/fortress/buildings/fortressbuildings.component';
import { FortressUnitsComponent } from './modules/factions/fortress/units/fortressunits.component';
import { FortressHeroesComponent } from './modules/factions/fortress/heroes/fortressheroes.component';

@NgModule({
  declarations: [
    AppComponent,
    NecropolisComponent,
    RampartComponent,
    StrongholdComponent,
    TowerComponent,
    CastleBuildingsComponent,
    CastleUnitsComponent,
    CastleHeroesComponent,
    FactionsComponent,
    RampartHeroesComponent,
    RampartBuildingsComponent,
    RampartUnitsComponent,
    TowerUnitsComponent,
    TowerBuildingsComponent,
    TowerHeroesComponent,
    InfernoUnitsComponent,
    InfernoBuildingsComponent,
    InfernoHeroesComponent,
    NecropolisUnitsComponent,
    NecropolisHeroesComponent,
    NecropolisBuildingsComponent,
    DungeonBuildingsComponent,
    DungeonUnitsComponent,
    DungeonHeroesComponent,
    StrongholdUnitsComponent,
    StrongholdHeroesComponent,
    StrongholdBuildingsComponent,
    ConfluxBuildingsComponent,
    ConfluxUnitsComponent,
    ConfluxHeroesComponent,
    FortressBuildingsComponent,
    FortressUnitsComponent,
    FortressHeroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
