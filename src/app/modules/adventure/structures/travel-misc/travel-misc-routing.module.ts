import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelMiscComponent } from './travel-misc.component';

const routes: Routes = [
  {
    path: '',
    component: TravelMiscComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelMiscRoutingModule {}
