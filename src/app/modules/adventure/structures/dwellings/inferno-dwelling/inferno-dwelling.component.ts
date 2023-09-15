import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeutralService } from 'src/app/services/neutral.service';
import { AdventureStructures } from 'src/app/models/adv-structures.model';
@Component({
  selector: 'app-inferno-dwelling',
  templateUrl: './inferno-dwelling.component.html',
  styleUrls: ['./inferno-dwelling.component.scss'],
})
export class InfernoDwellingComponent implements OnInit {
  dwelling: AdventureStructures[] = [];
  dataSource!: MatTableDataSource<AdventureStructures>;
  displayedColumns: string[] = ['name', 'image', 'description'];
  constructor(private neutralService: NeutralService) {}

  ngOnInit(): void {
    this.getInfernoDwelling();
  }

  getInfernoDwelling() {
    this.neutralService.getInfernoDwelling().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<AdventureStructures>(
        response.dwelling
      );
    });
  }
}
