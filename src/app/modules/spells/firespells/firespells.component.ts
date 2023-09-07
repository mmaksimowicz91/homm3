import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Spells } from 'src/app/models/spells.model';
import { SpellsService } from 'src/app/services/spells.service';

@Component({
  selector: 'app-firespells',
  templateUrl: './firespells.component.html',
  styleUrls: ['./firespells.component.scss'],
})
export class FireSpellsComponent implements OnInit {
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
    this.getFireSpells();
  }

  getFireSpells() {
    this.spellsService.getFireSpells().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Spells>(response.spells);
    });
  }
}
