import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Buildings } from '../../../../models/buildings.model';
import { RampartService } from 'src/app/services/rampart.service';

@Component({
  selector: 'app-rampartbuildings',
  templateUrl: './rampartbuildings.component.html',
  styleUrls: ['./rampartbuildings.component.scss'],
})
export class RampartBuildingsComponent implements OnInit {
  buildings: Buildings[] = [];
  dataSource!: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'image',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(private rampartService: RampartService) {}

  ngOnInit(): void {
    this.getRampartBuildings();
  }

  getRampartBuildings() {
    this.rampartService.getRampartBuildings().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Buildings>(response.buildings);
    });
  }
}
