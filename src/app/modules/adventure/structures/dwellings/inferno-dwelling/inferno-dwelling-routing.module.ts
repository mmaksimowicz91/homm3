import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfernoDwellingComponent } from './inferno-dwelling.component';

const routes: Routes = [
  {
    path: '',
    component: InfernoDwellingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfernoDwellingRoutingModule {}
