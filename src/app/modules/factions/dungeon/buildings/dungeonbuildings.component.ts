import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DungeonService } from 'src/app/services/dungeon.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-dungeonbuildings',
  templateUrl: './dungeonbuildings.component.html',
  styleUrls: ['./dungeonbuildings.component.scss'],
})
export class DungeonBuildingsComponent implements OnInit {
  buildings: Buildings[] = [];
  dataSource!: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(private dungeonService: DungeonService) {}

  ngOnInit(): void {
    this.getDungeonBuildings();
  }

  getDungeonBuildings() {
    this.dungeonService.getDungeonBuildings().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Buildings>(response.buildings);
    });
  }
}
