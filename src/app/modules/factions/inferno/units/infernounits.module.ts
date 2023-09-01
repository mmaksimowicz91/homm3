import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfernoUnitsComponent } from './infernounits.component';

const routes: Routes = [
  {
    path: '',
    component: InfernoUnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfernoUnitsRoutingModule {}
