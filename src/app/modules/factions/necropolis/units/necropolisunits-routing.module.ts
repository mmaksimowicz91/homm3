import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NecropolisUnitsComponent } from './necropolisunits.component';

const routes: Routes = [
  {
    path: '',
    component: NecropolisUnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NecropolisUnitsRoutingModule {}
