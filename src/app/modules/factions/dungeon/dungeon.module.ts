import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DungeonComponent } from './dungeon.component';
import { DungeonRoutingModule } from './dungeon-routing.module';
@NgModule({
  declarations: [DungeonComponent],
  imports: [CommonModule, DungeonRoutingModule],
})
export class DungeonModule {}
