import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RampartUnitsComponent } from './rampartunits.component';

const routes: Routes = [
  {
    path: '',
    component: RampartUnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RampartUnitsRoutingModule {}
