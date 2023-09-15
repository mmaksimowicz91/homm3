import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeutralDwellingComponent } from './neutral-dwelling.component';

const routes: Routes = [
  {
    path: '',
    component: NeutralDwellingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeutralDwellingRoutingModule {}
