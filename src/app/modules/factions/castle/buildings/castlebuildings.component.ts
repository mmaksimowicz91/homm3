import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FactionsService } from '../../../../services/factions.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-castlebuildings',
  templateUrl: './castlebuildings.component.html',
  styleUrls: ['./castlebuildings.component.scss'],
})
export class CastleBuildingsComponent implements OnInit {
  dataSource!: MatTableDataSource<Buildings>;
  displayedColumns: string[] = [
    'structure',
    'cost',
    'requirements',
    'benefits',
  ];
  constructor(
    private factionsService: FactionsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCastleBuildings();
  }

  getCastleBuildings() {
    console.log('Getting list');
    this.factionsService.getCastleBuildings().subscribe((data: Buildings[]) => {
      console.log('Received data:', data);
      this.dataSource = new MatTableDataSource<Buildings>(data);
      this.cdr.detectChanges();
    });
  }
}
