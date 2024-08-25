import { Component, inject } from '@angular/core';
import { ICONS } from '../core/model/icons';
import { PROJECTS } from '../core/model/project';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = PROJECTS;
  icons = ICONS;
  private translate = inject(TranslateService);
}
