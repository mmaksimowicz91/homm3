import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FortressHeroesComponent } from './fortressheroes.component';

const routes: Routes = [
  {
    path: '',
    component: FortressHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortressHeroesRoutingModule {}
