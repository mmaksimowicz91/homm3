import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CastleService } from '../../../../services/castle.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-castlebuildings',
  templateUrl: './castlebuildings.component.html',
  styleUrls: ['./castlebuildings.component.scss'],
})
export class CastleBuildingsComponent implements OnInit {
  buildings: Buildings[] = [];
  dataSource!: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'image',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(private castleService: CastleService) {}

  ngOnInit(): void {
    this.getCastleBuildings();
  }

  getCastleBuildings() {
    this.castleService.getCastleBuildings().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Buildings>(response.buildings);
    });
  }
}
