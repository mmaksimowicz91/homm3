import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeutralService } from 'src/app/services/neutral.service';
import { AdventureStructures } from 'src/app/models/adv-structures.model';
@Component({
  selector: 'app-travel-misc',
  templateUrl: './travel-misc.component.html',
  styleUrls: ['./travel-misc.component.scss'],
})
export class TravelMiscComponent implements OnInit {
  miscellaneous: AdventureStructures[] = [];
  dataSource!: MatTableDataSource<AdventureStructures>;
  displayedColumns: string[] = ['name', 'image', 'description'];
  constructor(private neutralService: NeutralService) {}

  ngOnInit(): void {
    this.getTravelMisc();
  }

  getTravelMisc() {
    this.neutralService.getMiscellaneous().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<AdventureStructures>(
        response.miscellaneous
      );
    });
  }
}
