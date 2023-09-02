import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfernoBuildingsComponent } from './infernobuildings.component';

const routes: Routes = [
  {
    path: '',
    component: InfernoBuildingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfernoBuildingsRoutingModule {}
