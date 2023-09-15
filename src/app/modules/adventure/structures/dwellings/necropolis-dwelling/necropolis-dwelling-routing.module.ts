import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NecropolisDwellingComponent } from './necropolis-dwelling.component';

const routes: Routes = [
  {
    path: '',
    component: NecropolisDwellingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NecropolisDwellingRoutingModule {}
