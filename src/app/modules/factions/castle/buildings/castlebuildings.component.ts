import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FactionsService } from '../../../../services/factions.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-castlebuildings',
  templateUrl: './castlebuildings.component.html',
  styleUrls: ['./castlebuildings.component.scss'],
})
export class CastleBuildingsComponent implements OnInit {
  // dataSource: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(private factionsService: FactionsService) {}

  ngOnInit(): void {}

  getBuildings() {
    this.factionsService.getCastleBuildings().subscribe();
  }
}
