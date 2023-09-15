import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeutralService } from 'src/app/services/neutral.service';
import { AdventureStructures } from 'src/app/models/adv-structures.model';

@Component({
  selector: 'app-att-modifiers',
  templateUrl: './att-modifiers.component.html',
  styleUrls: ['./att-modifiers.component.scss'],
})
export class AttModifiersComponent implements OnInit {
  attributes: AdventureStructures[] = [];
  dataSource!: MatTableDataSource<AdventureStructures>;
  displayedColumns: string[] = ['name', 'image', 'description'];
  constructor(private neutralService: NeutralService) {}

  ngOnInit(): void {
    this.getAttributes();
  }

  getAttributes() {
    this.neutralService.getAttributeModifier().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<AdventureStructures>(
        response.attributes
      );
    });
  }
}
