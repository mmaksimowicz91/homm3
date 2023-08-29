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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
