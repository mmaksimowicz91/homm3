import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonUnitsComponent } from './dungeonunits.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonUnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DungeonUnitsRoutingModule {}
