import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TowerBuildingsComponent } from './towerbuildings.component';

const routes: Routes = [
  {
    path: '',
    component: TowerBuildingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TowerBuildingsRoutingModule {}
