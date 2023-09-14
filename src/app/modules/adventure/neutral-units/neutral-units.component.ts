import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeutralService } from 'src/app/services/neutral.service';
import { Units } from 'src/app/models/units.model';

@Component({
  selector: 'app-neutral-units',
  templateUrl: './neutral-units.component.html',
  styleUrls: ['./neutral-units.component.scss'],
})
export class NeutralUnitsComponent implements OnInit {
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
  constructor(private neutralService: NeutralService) {}

  ngOnInit(): void {
    this.getNeutralUnits();
  }

  getNeutralUnits() {
    this.neutralService.getNeutralUnits().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Units>(response.units);
    });
  }
}
