import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtifactsComponent } from './artifacts.component';
import { MatTableModule } from '@angular/material/table';
import { ArtifactsRoutingModule } from './artifacts-routing.module';
@NgModule({
  declarations: [ArtifactsComponent],
  imports: [CommonModule, ArtifactsRoutingModule, MatTableModule],
})
export class SkillsModule {}
