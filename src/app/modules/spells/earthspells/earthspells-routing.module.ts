import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarthSpellsComponent } from './earthspells.component';

const routes: Routes = [
  {
    path: '',
    component: EarthSpellsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarthSpellsRoutingModule {}
