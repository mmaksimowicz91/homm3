import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastleHeroesComponent } from './castleheroes.component';

const routes: Routes = [
  {
    path: '',
    component: CastleHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastleHeroesRoutingModule {}
