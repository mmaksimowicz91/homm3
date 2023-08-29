import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InfernoService } from 'src/app/services/inferno.service';
import { Heroes } from '../../../../models/heroes.model';

@Component({
  selector: 'app-infernoheroes',
  templateUrl: './infernoheroes.component.html',
  styleUrls: ['./infernoheroes.component.scss'],
})
export class InfernoHeroesComponent implements OnInit {
  heroes: Heroes[] = [];
  dataSource!: MatTableDataSource<Heroes>;
  displayedColumns: string[] = ['name', 'race', 'gender', 'class', 'trait'];
  constructor(private infernoService: InfernoService) {}

  ngOnInit(): void {
    this.getInfernoHeroes();
  }

  getInfernoHeroes() {
    this.infernoService.getInfernoHeroes().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Heroes>(response.heroes);
    });
  }
}
