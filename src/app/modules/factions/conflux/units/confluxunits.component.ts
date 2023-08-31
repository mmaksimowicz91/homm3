import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfluxService } from 'src/app/services/conflux.service';
import { Units } from '../../../../models/units.model';

@Component({
  selector: 'app-confluxunits',
  templateUrl: './confluxunits.component.html',
  styleUrls: ['./confluxunits.component.scss'],
})
export class ConfluxUnitsComponent implements OnInit {
  units: Units[] = [];
  dataSource!: MatTableDataSource<Units>;
  displayedColumns: string[] = [
    'name',
    'image',
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
  constructor(private confluxService: ConfluxService) {}

  ngOnInit(): void {
    this.getConfluxUnits();
  }

  getConfluxUnits() {
    this.confluxService.getConfluxUnits().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Units>(response.units);
    });
  }
}
