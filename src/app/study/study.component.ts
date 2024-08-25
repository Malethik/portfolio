import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-study',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './study.component.html',
  styleUrl: './study.component.css',
})
export class StudyComponent {
  private translate = inject(TranslateService);
}
