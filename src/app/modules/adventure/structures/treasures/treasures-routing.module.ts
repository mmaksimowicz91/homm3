import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreasuresComponent } from './treasures.component';

const routes: Routes = [
  {
    path: '',
    component: TreasuresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreasuresRoutingModule {}
