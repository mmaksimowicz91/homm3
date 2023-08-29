import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TowerService } from 'src/app/services/tower.service';
import { Heroes } from '../../../../models/heroes.model';

@Component({
  selector: 'app-towerheroes',
  templateUrl: './towerheroes.component.html',
  styleUrls: ['./towerheroes.component.scss'],
})
export class TowerHeroesComponent implements OnInit {
  heroes: Heroes[] = [];
  dataSource!: MatTableDataSource<Heroes>;
  displayedColumns: string[] = ['name', 'race', 'gender', 'class', 'trait'];
  constructor(private towerService: TowerService) {}

  ngOnInit(): void {
    this.getTowerHeroes();
  }

  getTowerHeroes() {
    this.towerService.getTowerHeroes().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Heroes>(response.heroes);
    });
  }
}
