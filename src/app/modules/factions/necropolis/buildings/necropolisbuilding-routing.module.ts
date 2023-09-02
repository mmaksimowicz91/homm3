import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NecropolisBuildingsComponent } from './necropolisbuildings.component';

const routes: Routes = [
  {
    path: '',
    component: NecropolisBuildingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NecropolisBuildingsRoutingModule {}
