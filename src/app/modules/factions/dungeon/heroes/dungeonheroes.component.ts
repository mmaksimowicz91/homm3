import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DungeonService } from 'src/app/services/dungeon.service';
import { Heroes } from '../../../../models/heroes.model';

@Component({
  selector: 'app-dungeonheroes',
  templateUrl: './dungeonheroes.component.html',
  styleUrls: ['./dungeonheroes.component.scss'],
})
export class DungeonHeroesComponent implements OnInit {
  heroes: Heroes[] = [];
  dataSource!: MatTableDataSource<Heroes>;
  displayedColumns: string[] = [
    'image',
    'name',
    'race',
    'gender',
    'class',
    'trait',
  ];
  constructor(private dungeonService: DungeonService) {}

  ngOnInit(): void {
    this.getDungeonHeroes();
  }

  getDungeonHeroes() {
    this.dungeonService.getDungeonHeroes().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Heroes>(response.heroes);
    });
  }
}
