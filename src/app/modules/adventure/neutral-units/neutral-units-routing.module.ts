import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeutralUnitsComponent } from './neutral-units.component';

const routes: Routes = [
  {
    path: '',
    component: NeutralUnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeutralUnitsRoutingModule {}
