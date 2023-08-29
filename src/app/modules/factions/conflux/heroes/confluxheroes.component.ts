import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfluxService } from 'src/app/services/conflux.service';
import { Heroes } from '../../../../models/heroes.model';

@Component({
  selector: 'app-confluxheroes',
  templateUrl: './confluxheroes.component.html',
  styleUrls: ['./confluxheroes.component.scss'],
})
export class ConfluxHeroesComponent implements OnInit {
  heroes: Heroes[] = [];
  dataSource!: MatTableDataSource<Heroes>;
  displayedColumns: string[] = ['name', 'race', 'gender', 'class', 'trait'];
  constructor(private confluxService: ConfluxService) {}

  ngOnInit(): void {
    this.getConfluxHeroes();
  }

  getConfluxHeroes() {
    this.confluxService.getConfluxHeroes().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Heroes>(response.heroes);
    });
  }
}
