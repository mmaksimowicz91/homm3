import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastleDwellingComponent } from './castle-dwelling.component';

const routes: Routes = [
  {
    path: '',
    component: CastleDwellingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastleDwellingRoutingModule {}
