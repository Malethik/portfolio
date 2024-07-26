import { Component } from '@angular/core';
import { ICONS } from '../core/model/icons';
import { PROJECTS } from '../core/model/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = PROJECTS;
  icons = ICONS;
}
