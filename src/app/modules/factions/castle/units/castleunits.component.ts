import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CastleService } from '../../../../services/castle.service';
import { Units } from '../../../../models/units.model';

@Component({
  selector: 'app-castleunits',
  templateUrl: './castleunits.component.html',
  styleUrls: ['./castleunits.component.scss'],
})
export class CastleUnitsComponent implements OnInit {
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
  constructor(private castleService: CastleService) {}

  ngOnInit(): void {
    this.getCastleUnits();
  }

  getCastleUnits() {
    this.castleService.getCastleUnits().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Units>(response.units);
    });
  }
}
