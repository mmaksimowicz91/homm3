import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonBuildingsComponent } from './dungeonbuildings.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonBuildingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DungeonBuildingsRoutingModule {}
