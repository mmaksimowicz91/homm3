import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Artifacts } from 'src/app/models/artifacts.model';
import { ArtifactsService } from 'src/app/services/artifacts.service';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.scss'],
})
export class ArtifactsComponent implements OnInit {
  artifacts: Artifacts[] = [];
  dataSource!: MatTableDataSource<Artifacts>;
  displayedColumns: string[] = [
    'name',
    'image',
    'slot',
    'rarity',
    'description',
  ];
  constructor(private artifactsService: ArtifactsService) {}

  ngOnInit(): void {
    this.getArtifacts();
  }

  getArtifacts() {
    this.artifactsService.getArtifacts().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Artifacts>(response.artifacts);
    });
  }
}
