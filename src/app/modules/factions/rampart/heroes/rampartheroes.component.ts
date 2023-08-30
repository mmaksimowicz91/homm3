import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RampartService } from 'src/app/services/rampart.service';
import { Heroes } from '../../../../models/heroes.model';

@Component({
  selector: 'app-rampartheroes',
  templateUrl: './rampartheroes.component.html',
  styleUrls: ['./rampartheroes.component.scss'],
})
export class RampartHeroesComponent implements OnInit {
  heroes: Heroes[] = [];
  dataSource!: MatTableDataSource<Heroes>;
  displayedColumns: string[] = ['image', 'name', 'race', 'gender', 'class', 'trait'];
  constructor(private rampartService: RampartService) {}

  ngOnInit(): void {
    this.getRampartHeroes();
  }

  getRampartHeroes() {
    this.rampartService.getRampartHeroes().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Heroes>(response.heroes);
    });
  }
}
