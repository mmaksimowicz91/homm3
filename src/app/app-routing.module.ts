import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'factions',
    loadChildren: () =>
      import('./modules/factions/factions.module').then(
        (m) => m.FactionsModule
      ),
    data: { breadcrumb: 'Factions' },
  },
  {
    path: 'spells',
    loadChildren: () =>
      import('./modules/spells/spells.module').then((m) => m.SpellsModule),
    data: { breadcrumb: 'Spells' },
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./modules/skills/skills.module').then((m) => m.SkillsModule),
    data: { breadcrumb: 'Skills' },
  },
  {
    path: 'artifacts',
    loadChildren: () =>
      import('./modules/artifacts/artifacts.module').then(
        (m) => m.SkillsModule
      ),
    data: { breadcrumb: 'Artifacts' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
