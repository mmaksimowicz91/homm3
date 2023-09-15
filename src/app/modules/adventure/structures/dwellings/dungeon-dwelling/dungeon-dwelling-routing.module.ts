import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonDwellingComponent } from './dungeon-dwelling.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonDwellingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DungeonDwellingRoutingModule {}
