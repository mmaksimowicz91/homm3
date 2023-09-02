import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TowerUnitsComponent } from './towerunits.component';

const routes: Routes = [
  {
    path: '',
    component: TowerUnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TowerUnitsRoutingModule {}
