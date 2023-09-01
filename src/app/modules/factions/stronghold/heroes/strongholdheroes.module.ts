import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrongholdHeroesComponent } from './strongholdheroes.component';

const routes: Routes = [
  {
    path: '',
    component: StrongholdHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrongholdHeroesRoutingModule {}
