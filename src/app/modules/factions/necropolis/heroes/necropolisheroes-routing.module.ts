import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NecropolisHeroesComponent } from './necropolisheroes.component';

const routes: Routes = [
  {
    path: '',
    component: NecropolisHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NecropolisHeroesRoutingModule {}
