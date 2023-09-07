import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirSpellsComponent } from './airspells.component';

const routes: Routes = [
  {
    path: '',
    component: AirSpellsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirSpellsRoutingModule {}
