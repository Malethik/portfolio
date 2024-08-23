import { Component, Inject, inject } from '@angular/core';
import { EmailService } from '../core/service/email.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacs.component.html',
  styleUrl: './contacs.component.css',
})
export class ContacsComponent {
  from: string = '';
  to: string = 'quintiliani.d@gmail.com';
  subject: string = '';
  text: string = '';

  emailService = inject(EmailService);

  sendEmail() {
    this.emailService
      .sendEmail(this.from, this.to, this.subject, this.text)
      .subscribe({
        next: (response) => console.log('Email inviata con successo', response),
        error: (error) =>
          console.error("Errore durante l'invio dell'email", error),
      });
  }
}
