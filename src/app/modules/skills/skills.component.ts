import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Skills } from 'src/app/models/skills.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  spells: Skills[] = [];
  dataSource!: MatTableDataSource<Skills>;
  displayedColumns: string[] = [
    'name',
    'description',
    'basic_icon',
    'basic_description',
    'advanced_icon',
    'advanced_description',
    'expert_icon',
    'expert_description',
  ];
  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills() {
    this.skillsService.getSkills().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<Skills>(response.skills);
    });
  }
}
