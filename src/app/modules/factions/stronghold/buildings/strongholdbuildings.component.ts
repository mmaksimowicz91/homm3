import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StrongholdService } from 'src/app/services/stronghold.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-strongholdbuildings',
  templateUrl: './strongholdbuildings.component.html',
  styleUrls: ['./strongholdbuildings.component.scss'],
})
export class StrongholdBuildingsComponent implements OnInit {
  buildings: Buildings[] = [];
  dataSource!: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'image',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(private strongholdService: StrongholdService) {}

  ngOnInit(): void {
    this.getStrongholdBuildings();
  }

  getStrongholdBuildings() {
    this.strongholdService
      .getStrongholdBuildings()
      .subscribe((response: any) => {
        this.dataSource = new MatTableDataSource<Buildings>(response.buildings);
      });
  }
}
