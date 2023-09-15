import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RampartDwellingComponent } from './rampart-dwelling.component';

const routes: Routes = [
  {
    path: '',
    component: RampartDwellingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RampartDwellingRoutingModule {}
