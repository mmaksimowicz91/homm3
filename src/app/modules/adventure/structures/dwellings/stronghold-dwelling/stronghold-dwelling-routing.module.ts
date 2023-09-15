import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrongholdDwellingComponent } from './stronghold-dwelling.component';

const routes: Routes = [
  {
    path: '',
    component: StrongholdDwellingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrongholdDwellingRoutingModule {}
