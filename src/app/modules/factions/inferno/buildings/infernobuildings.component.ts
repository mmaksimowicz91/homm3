import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InfernoService } from 'src/app/services/inferno.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-infernobuildings',
  templateUrl: './infernobuildings.component.html',
  styleUrls: ['./infernobuildings.component.scss'],
})
export class InfernoBuildingsComponent implements OnInit {
  buildings: Buildings[] = [];
  dataSource!: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'image',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(private infernoService: InfernoService) {}

  ngOnInit(): void {
    this.getInfernoBuildings();
  }

  getInfernoBuildings() {
    this.infernoService.getInfernoBuildings().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Buildings>(response.buildings);
    });
  }
}
