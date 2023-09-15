import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfluxDwellingComponent } from './conflux-dwelling.component';

const routes: Routes = [
  {
    path: '',
    component: ConfluxDwellingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfluxDwellingRoutingModule {}
