import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfluxHeroesComponent } from './confluxheroes.component';

const routes: Routes = [
  {
    path: '',
    component: ConfluxHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfluxHeroesRoutingModule {}
