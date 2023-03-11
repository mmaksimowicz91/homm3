import { Component } from '@angular/core';
import { FactionsService } from '../../../../services/factions.service';
import { Buildings } from '../../../../models/buildings.model';

@Component({
  selector: 'app-castlebuildings',
  templateUrl: './castlebuildings.component.html',
  styleUrls: ['./castlebuildings.component.scss'],
})
export class CastleBuildingsComponent {
  castleBuildings: Buildings[] = [];
  constructor(private factionsService: FactionsService) {}

  getBuildings() {
    this.factionsService.getCastleBuildings().subscribe();
  }
}
