import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Spells } from 'src/app/models/spells.model';
import { SpellsService } from 'src/app/services/spells.service';

@Component({
  selector: 'app-airspells',
  templateUrl: './airspells.component.html',
  styleUrls: ['./airspells.component.scss'],
})
export class AirSpellsComponent implements OnInit {
  spells: Spells[] = [];
  dataSource!: MatTableDataSource<Spells>;
  displayedColumns: string[] = [
    'name',
    'icon',
    'type',
    'level',
    'mana_cost',
    'basic_level',
    'advanced_level',
    'expert_level',
  ];
  constructor(private spellsService: SpellsService) {}

  ngOnInit(): void {
    this.getAirSpells();
  }

  getAirSpells() {
    this.spellsService.getAirSpells().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Spells>(response.spells);
    });
  }
}
