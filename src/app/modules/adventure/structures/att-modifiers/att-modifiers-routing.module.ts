import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttModifiersComponent } from './att-modifiers.component';
const routes: Routes = [
  {
    path: '',
    component: AttModifiersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttModifiersRoutingModule {}
