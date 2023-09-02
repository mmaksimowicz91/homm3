import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FortressBuildingsComponent } from './fortressbuildings.component';

const routes: Routes = [
  {
    path: '',
    component: FortressBuildingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortressBuildingsRoutingModule {}
