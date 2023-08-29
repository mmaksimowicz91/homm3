import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InfernoService } from 'src/app/services/inferno.service';
import { Units } from '../../../../models/units.model';

@Component({
  selector: 'app-infernounits',
  templateUrl: './infernounits.component.html',
  styleUrls: ['./infernounits.component.scss'],
})
export class InfernoUnitsComponent implements OnInit {
  units: Units[] = [];
  dataSource!: MatTableDataSource<Units>;
  displayedColumns: string[] = [
    'name',
    'tier',
    'upgraded',
    'type',
    'dwelling',
    'cost',
    'attack',
    'defense',
    'hp',
    'damage',
    'speed',
    'growth',
    'special',
  ];
  constructor(private infernoService: InfernoService) {}

  ngOnInit(): void {
    this.getInfernoUnits();
  }

  getInfernoUnits() {
    this.infernoService.getInfernoUnits().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Units>(response.units);
    });
  }
}
