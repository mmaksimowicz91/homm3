import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NecropolisService } from 'src/app/services/necropolis.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-necropolisbuildings',
  templateUrl: './necropolisbuildings.component.html',
  styleUrls: ['./necropolisbuildings.component.scss'],
})
export class NecropolisBuildingsComponent implements OnInit {
  buildings: Buildings[] = [];
  dataSource!: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(private necropolisService: NecropolisService) {}

  ngOnInit(): void {
    this.getNecropolisBuildings();
  }

  getNecropolisBuildings() {
    this.necropolisService
      .getNecropolisBuildings()
      .subscribe((response: any) => {
        this.dataSource = new MatTableDataSource<Buildings>(response.buildings);
      });
  }
}
