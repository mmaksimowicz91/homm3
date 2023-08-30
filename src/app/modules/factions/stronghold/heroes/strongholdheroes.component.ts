import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StrongholdService } from 'src/app/services/stronghold.service';
import { Heroes } from '../../../../models/heroes.model';

@Component({
  selector: 'app-strongholdheroes',
  templateUrl: './strongholdheroes.component.html',
  styleUrls: ['./strongholdheroes.component.scss'],
})
export class StrongholdHeroesComponent implements OnInit {
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
  constructor(private strongholdService: StrongholdService) {}

  ngOnInit(): void {
    this.getStrongholdHeroes();
  }

  getStrongholdHeroes() {
    this.strongholdService.getStrongholdHeroes().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Heroes>(response.heroes);
    });
  }
}
