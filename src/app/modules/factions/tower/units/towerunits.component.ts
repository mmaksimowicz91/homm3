import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TowerService } from 'src/app/services/tower.service';
import { Units } from '../../../../models/units.model';

@Component({
  selector: 'app-towerunits',
  templateUrl: './towerunits.component.html',
  styleUrls: ['./towerunits.component.scss'],
})
export class TowerUnitsComponent implements OnInit {
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
  constructor(private towerService: TowerService) {}

  ngOnInit(): void {
    this.getTowerUnits();
  }

  getTowerUnits() {
    this.towerService.getTowerUnits().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Units>(response.units);
    });
  }
}
