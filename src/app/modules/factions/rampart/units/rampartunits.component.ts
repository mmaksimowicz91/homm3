import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RampartService } from 'src/app/services/rampart.service';
import { Units } from '../../../../models/units.model';

@Component({
  selector: 'app-rampartunits',
  templateUrl: './rampartunits.component.html',
  styleUrls: ['./rampartunits.component.scss'],
})
export class RampartUnitsComponent implements OnInit {
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
  constructor(private rampartService: RampartService) {}

  ngOnInit(): void {
    this.getRampartUnits();
  }

  getRampartUnits() {
    this.rampartService.getRampartUnits().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Units>(response.units);
    });
  }
}
