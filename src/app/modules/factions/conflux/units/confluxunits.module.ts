import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfluxUnitsComponent } from './confluxunits.component';

const routes: Routes = [
  {
    path: '',
    component: ConfluxUnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfluxeUnitsRoutingModule {}
