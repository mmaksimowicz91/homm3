import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TowerService } from 'src/app/services/tower.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-towerbuildings',
  templateUrl: './towerbuildings.component.html',
  styleUrls: ['./towerbuildings.component.scss'],
})
export class TowerBuildingsComponent implements OnInit {
  buildings: Buildings[] = [];
  dataSource!: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(private towerService: TowerService) {}

  ngOnInit(): void {
    this.getTowerBuildings();
  }

  getTowerBuildings() {
    this.towerService.getTowerBuildings().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Buildings>(response.buildings);
    });
  }
}
