import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterSpellsComponent } from './waterspells.component';

const routes: Routes = [
  {
    path: '',
    component: WaterSpellsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterSpellsRoutingModule {}
