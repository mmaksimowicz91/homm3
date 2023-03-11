import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { FactionsComponent } from './modules/factions/factions.component';
import { CastleComponent } from './modules/factions/castle/castle.component';
import { CastleBuildingsComponent } from './modules/factions/castle/buildings/castlebuildings.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
