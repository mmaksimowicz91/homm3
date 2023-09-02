import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrongholdUnitsComponent } from './strongholdunits.component';

const routes: Routes = [
  {
    path: '',
    component: StrongholdUnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrongholdUnitsRoutingModule {}
