import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeutralService } from 'src/app/services/neutral.service';
import { AdventureStructures } from 'src/app/models/adv-structures.model';
@Component({
  selector: 'app-stronghold-dwelling',
  templateUrl: './stronghold-dwelling.component.html',
  styleUrls: ['./stronghold-dwelling.component.scss'],
})
export class StrongholdDwellingComponent implements OnInit {
  dwelling: AdventureStructures[] = [];
  dataSource!: MatTableDataSource<AdventureStructures>;
  displayedColumns: string[] = ['name', 'image', 'description'];
  constructor(private neutralService: NeutralService) {}

  ngOnInit(): void {
    this.getStrongholdDwelling();
  }

  getStrongholdDwelling() {
    this.neutralService.getStrongholdDwelling().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<AdventureStructures>(
        response.dwelling
      );
    });
  }
}
