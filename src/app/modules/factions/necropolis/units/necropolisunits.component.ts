import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NecropolisService } from 'src/app/services/necropolis.service';
import { Units } from '../../../../models/units.model';

@Component({
  selector: 'app-necropolisunits',
  templateUrl: './necropolisunits.component.html',
  styleUrls: ['./necropolisunits.component.scss'],
})
export class NecropolisUnitsComponent implements OnInit {
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
  constructor(private necropolisService: NecropolisService) {}

  ngOnInit(): void {
    this.getNecropolisUnits();
  }

  getNecropolisUnits() {
    this.necropolisService.getNecropolisUnits().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Units>(response.units);
    });
  }
}
