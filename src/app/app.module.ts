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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
