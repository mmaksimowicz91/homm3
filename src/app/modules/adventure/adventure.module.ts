import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdventureRoutingModule } from './adventure-routing.module';
import { AdventureComponent } from './adventure.component';
@NgModule({
  declarations: [AdventureComponent],
  imports: [CommonModule, AdventureRoutingModule],
})
export class AdventureModule {}
