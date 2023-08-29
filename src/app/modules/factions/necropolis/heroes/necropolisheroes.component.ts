import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NecropolisService } from 'src/app/services/necropolis.service';
import { Heroes } from '../../../../models/heroes.model';

@Component({
  selector: 'app-necropolisheroes',
  templateUrl: './necropolisheroes.component.html',
  styleUrls: ['./necropolisheroes.component.scss'],
})
export class NecropolisHeroesComponent implements OnInit {
  heroes: Heroes[] = [];
  dataSource!: MatTableDataSource<Heroes>;
  displayedColumns: string[] = ['name', 'race', 'gender', 'class', 'trait'];
  constructor(private necropolisService: NecropolisService) {}

  ngOnInit(): void {
    this.getNecropolisHeroes();
  }

  getNecropolisHeroes() {
    this.necropolisService.getNecropolisHeroes().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Heroes>(response.heroes);
    });
  }
}
