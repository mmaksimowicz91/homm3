import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeutralService } from 'src/app/services/neutral.service';
import { AdventureStructures } from 'src/app/models/adv-structures.model';
@Component({
  selector: 'app-fortress-dwelling',
  templateUrl: './fortress-dwelling.component.html',
  styleUrls: ['./fortress-dwelling.component.scss'],
})
export class FortressDwellingComponent implements OnInit {
  dwelling: AdventureStructures[] = [];
  dataSource!: MatTableDataSource<AdventureStructures>;
  displayedColumns: string[] = ['name', 'image', 'description'];
  constructor(private neutralService: NeutralService) {}

  ngOnInit(): void {
    this.getFortressDwelling();
  }

  getFortressDwelling() {
    this.neutralService.getFortressDwelling().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<AdventureStructures>(
        response.dwelling
      );
    });
  }
}
