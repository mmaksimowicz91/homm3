import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TowerDwellingComponent } from './tower-dwelling.component';

const routes: Routes = [
  {
    path: '',
    component: TowerDwellingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TowerDwellingRoutingModule {}
