import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanksComponent } from './banks.component';
import { MatTableModule } from '@angular/material/table';
import { BanksRoutingModule } from './banks-routing.module';
@NgModule({
  declarations: [BanksComponent],
  imports: [CommonModule, BanksRoutingModule, MatTableModule],
})
export class BanksModule {}
