import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FortressService } from 'src/app/services/fortress.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-fortressbuildings',
  templateUrl: './fortressbuildings.component.html',
  styleUrls: ['./fortressbuildings.component.scss'],
})
export class FortressBuildingsComponent implements OnInit {
  buildings: Buildings[] = [];
  dataSource!: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(private fortressService: FortressService) {}

  ngOnInit(): void {
    this.getFortressBuildings();
  }

  getFortressBuildings() {
    this.fortressService.getFortressBuildings().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Buildings>(response.buildings);
    });
  }
}
