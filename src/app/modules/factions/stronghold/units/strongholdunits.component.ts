import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StrongholdService } from 'src/app/services/stronghold.service';
import { Units } from '../../../../models/units.model';

@Component({
  selector: 'app-strongholdunits',
  templateUrl: './strongholdunits.component.html',
  styleUrls: ['./strongholdunits.component.scss'],
})
export class StrongholdUnitsComponent implements OnInit {
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
  constructor(private strongholdService: StrongholdService) {}

  ngOnInit(): void {
    this.getStrongholdUnits();
  }

  getStrongholdUnits() {
    this.strongholdService.getStrongholdUnits().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Units>(response.units);
    });
  }
}
