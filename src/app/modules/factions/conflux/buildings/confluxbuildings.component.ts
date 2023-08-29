import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfluxService } from 'src/app/services/conflux.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-confluxbuildings',
  templateUrl: './confluxbuildings.component.html',
  styleUrls: ['./confluxbuildings.component.scss'],
})
export class ConfluxBuildingsComponent implements OnInit {
  buildings: Buildings[] = [];
  dataSource!: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(private confluxService: ConfluxService) {}

  ngOnInit(): void {
    this.getConfluxBuildings();
  }

  getConfluxBuildings() {
    this.confluxService.getConfluxBuildings().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Buildings>(response.buildings);
    });
  }
}
