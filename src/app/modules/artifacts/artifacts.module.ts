import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtifactsComponent } from './artifacts.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ArtifactsRoutingModule } from './artifacts-routing.module';
@NgModule({
  declarations: [ArtifactsComponent],
  imports: [
    CommonModule,
    ArtifactsRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class ArtifactsModule {}
