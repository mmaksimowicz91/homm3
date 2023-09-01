import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RampartBuildingsComponent } from './rampartbuildings.component';

const routes: Routes = [
  {
    path: '',
    component: RampartBuildingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RampartBuildingsRoutingModule {}
