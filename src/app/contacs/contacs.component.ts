import { Component, Inject, inject } from '@angular/core';
import { EmailService } from '../core/service/email.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacs',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacs.component.html',
  styleUrl: './contacs.component.css',
})
export class ContacsComponent {
  showModal: boolean = false;

  from: string = '';
  to: string = 'quintiliani.d@gmail.com';
  subject: string = '';
  text: string = '';

  emailService = inject(EmailService);

  sendEmail() {
    this.emailService
      .sendEmail(this.from, this.to, this.subject, this.text)
      .subscribe({
        next: (response) => (
          (this.showModal = true),
          console.log('Email inviata con successo', response)
        ),
        error: (error) =>
          console.error("Errore durante l'invio dell'email", error),
      });
  }
  closeModal() {
    this.showModal = false;
  }
}
