import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeutralService } from 'src/app/services/neutral.service';
import { AdventureStructures } from 'src/app/models/adv-structures.model';
@Component({
  selector: 'app-mines',
  templateUrl: './mines.component.html',
  styleUrls: ['./mines.component.scss'],
})
export class MinesComponent implements OnInit {
  mines: AdventureStructures[] = [];
  dataSource!: MatTableDataSource<AdventureStructures>;
  displayedColumns: string[] = ['name', 'image', 'description'];
  constructor(private neutralService: NeutralService) {}

  ngOnInit(): void {
    this.getMines();
  }

  getMines() {
    this.neutralService.getMines().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<AdventureStructures>(
        response.mines
      );
    });
  }
}
