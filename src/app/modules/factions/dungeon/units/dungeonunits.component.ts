import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DungeonService } from 'src/app/services/dungeon.service';
import { Units } from '../../../../models/units.model';

@Component({
  selector: 'app-dungeonunits',
  templateUrl: './dungeonunits.component.html',
  styleUrls: ['./dungeonunits.component.scss'],
})
export class DungeonUnitsComponent implements OnInit {
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
  constructor(private dungeonService: DungeonService) {}

  ngOnInit(): void {
    this.getDungeonUnits();
  }

  getDungeonUnits() {
    this.dungeonService.getDungeonUnits().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Units>(response.units);
    });
  }
}
