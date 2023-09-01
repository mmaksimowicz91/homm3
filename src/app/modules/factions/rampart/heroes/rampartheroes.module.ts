import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RampartHeroesComponent } from './rampartheroes.component';

const routes: Routes = [
  {
    path: '',
    component: RampartHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RampartHeroesRoutingModule {}
