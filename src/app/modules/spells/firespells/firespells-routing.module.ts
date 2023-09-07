import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FireSpellsComponent } from './firespells.component';

const routes: Routes = [
  {
    path: '',
    component: FireSpellsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireSpellsRoutingModule {}
