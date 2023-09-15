import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeutralService } from 'src/app/services/neutral.service';
import { AdventureStructures } from 'src/app/models/adv-structures.model';
@Component({
  selector: 'app-dungeon-dwelling',
  templateUrl: './dungeon-dwelling.component.html',
  styleUrls: ['./dungeon-dwelling.component.scss'],
})
export class DungeonDwellingComponent implements OnInit {
  dwelling: AdventureStructures[] = [];
  dataSource!: MatTableDataSource<AdventureStructures>;
  displayedColumns: string[] = ['name', 'image', 'description'];
  constructor(private neutralService: NeutralService) {}

  ngOnInit(): void {
    this.getDungeonDwelling();
  }

  getDungeonDwelling() {
    this.neutralService.getDungeonDwelling().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<AdventureStructures>(
        response.dwelling
      );
    });
  }
}
