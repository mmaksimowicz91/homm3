import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FortressService } from 'src/app/services/fortress.service';
import { Units } from '../../../../models/units.model';

@Component({
  selector: 'app-fortressunits',
  templateUrl: './fortressunits.component.html',
  styleUrls: ['./fortressunits.component.scss'],
})
export class FortressUnitsComponent implements OnInit {
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
  constructor(private fortressService: FortressService) {}

  ngOnInit(): void {
    this.getFortressUnits();
  }

  getFortressUnits() {
    this.fortressService.getFortressUnits().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Units>(response.units);
    });
  }
}
