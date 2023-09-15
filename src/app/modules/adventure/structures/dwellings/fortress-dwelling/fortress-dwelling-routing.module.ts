import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FortressDwellingComponent } from './fortress-dwelling.component';

const routes: Routes = [
  {
    path: '',
    component: FortressDwellingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortressDwellingRoutingModule {}
