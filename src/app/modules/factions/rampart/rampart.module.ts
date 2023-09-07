import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RampartComponent } from './rampart.component';
import { RampartRoutingModule } from './rampart-routing.module';
@NgModule({
  declarations: [RampartComponent],
  imports: [CommonModule, RampartRoutingModule],
})
export class RampartModule {}
