import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RampartHeroesComponent } from './rampartheroes.component';
import { RampartHeroesRoutingModule } from './rampartheroes-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [RampartHeroesComponent],
  imports: [CommonModule, RampartHeroesRoutingModule, MatTableModule],
})
export class RampartHeroesModule {}
