import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CastleService } from 'src/app/services/castle.service';
import { Heroes } from '../../../../models/heroes.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './castleheroes.component.html',
  styleUrls: ['./castleheroes.component.scss'],
})
export class CastleHeroesComponent implements OnInit {
  heroes: Heroes[] = [];
  dataSource!: MatTableDataSource<Heroes>;
  displayedColumns: string[] = ['name', 'race', 'gender', 'class', 'trait'];
  constructor(private castleService: CastleService) {}

  ngOnInit(): void {
    this.getCastleHeroes();
  }

  getCastleHeroes() {
    this.castleService.getCastleHeroes().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Heroes>(response.heroes);
    });
  }
}
