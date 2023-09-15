import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeutralService } from 'src/app/services/neutral.service';
import { AdventureStructures } from 'src/app/models/adv-structures.model';
@Component({
  selector: 'app-treasures',
  templateUrl: './treasures.component.html',
  styleUrls: ['./treasures.component.scss'],
})
export class TreasuresComponent implements OnInit {
  treasures: AdventureStructures[] = [];
  dataSource!: MatTableDataSource<AdventureStructures>;
  displayedColumns: string[] = ['name', 'image', 'description'];
  constructor(private neutralService: NeutralService) {}

  ngOnInit(): void {
    this.getTreasures();
  }

  getTreasures() {
    this.neutralService.getTreasures().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<AdventureStructures>(
        response.treasures
      );
    });
  }
}
