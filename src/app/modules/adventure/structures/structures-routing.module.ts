import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuresComponent } from './structures.component';

const routes: Routes = [
  {
    path: '',
    component: StructuresComponent,
  },
  {
    path: 'att-modifiers',
    loadChildren: () =>
      import('./att-modifiers/att-modifiers.module').then(
        (m) => m.AttModifiersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructuresRoutingModule {}
