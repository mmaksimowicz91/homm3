import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeutralService } from 'src/app/services/neutral.service';
import { AdventureStructures } from 'src/app/models/adv-structures.model';
@Component({
  selector: 'app-necropolis-dwelling',
  templateUrl: './necropolis-dwelling.component.html',
  styleUrls: ['./necropolis-dwelling.component.scss'],
})
export class NecropolisDwellingComponent implements OnInit {
  dwelling: AdventureStructures[] = [];
  dataSource!: MatTableDataSource<AdventureStructures>;
  displayedColumns: string[] = ['name', 'image', 'description'];
  constructor(private neutralService: NeutralService) {}

  ngOnInit(): void {
    this.getNecropolisDwelling();
  }

  getNecropolisDwelling() {
    this.neutralService.getNecropolisDwelling().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<AdventureStructures>(
        response.dwelling
      );
    });
  }
}
