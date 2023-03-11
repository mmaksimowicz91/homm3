import { Component, OnInit } from '@angular/core';
import { FactionsService } from '../../../services/factions.service';

@Component({
  selector: 'app-castle',
  templateUrl: './castle.component.html',
  styleUrls: ['./castle.component.scss'],
})
export class CastleComponent implements OnInit {
  constructor(private factionsService: FactionsService) {}
  ngOnInit() {
    this.factionsService.getCastleBuildings();
  }
}
