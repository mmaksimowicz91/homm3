import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FortressService } from 'src/app/services/fortress.service';
import { Heroes } from '../../../../models/heroes.model';

@Component({
  selector: 'app-fortressheroes',
  templateUrl: './fortressheroes.component.html',
  styleUrls: ['./fortressheroes.component.scss'],
})
export class FortressHeroesComponent implements OnInit {
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
  constructor(private fortressService: FortressService) {}

  ngOnInit(): void {
    this.getFortressHeroes();
  }

  getFortressHeroes() {
    this.fortressService.getFortressHeroes().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Heroes>(response.heroes);
    });
  }
}
