import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
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
