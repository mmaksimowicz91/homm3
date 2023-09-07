import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TowerComponent } from './tower.component';
import { TowerRoutingModule } from './tower-routing.module';
@NgModule({
  declarations: [TowerComponent],
  imports: [CommonModule, TowerRoutingModule],
})
export class TowerModule {}
