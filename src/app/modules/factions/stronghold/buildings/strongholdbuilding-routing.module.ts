import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrongholdBuildingsComponent } from './strongholdbuildings.component';

const routes: Routes = [
  {
    path: '',
    component: StrongholdBuildingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrongholdBuildingsRoutingModule {}
