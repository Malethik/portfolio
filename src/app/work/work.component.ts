import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  private translate = inject(TranslateService);

  downloadEnglish(): void {
    const link = document.createElement('a');
    link.href = '../../assets/DanieleQuintilianiCvEng.pdf'; // Path relativo al file nella cartella assets
    link.download = 'DanieleQuintilianiCvEng.pdf'; // Nome del file scaricato
    link.click();
  }
  downloadSpanish(): void {
    const link = document.createElement('a');
    link.href = '../../assets/DanieleQuintilianiCvEs.pdf'; // Path relativo al file nella cartella assets
    link.download = 'DanieleQuintilianiCvEs.pdf'; // Nome del file scaricato
    link.click();
  }
}
