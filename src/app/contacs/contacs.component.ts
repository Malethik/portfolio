import { Component, Inject, inject } from '@angular/core';
import { EmailService } from '../core/service/email.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ICONS } from '../core/model/icons';

@Component({
  selector: 'app-contacs',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contacs.component.html',
  styleUrl: './contacs.component.css',
})
export class ContacsComponent {
  showModal: boolean = false;
  icons = ICONS;
  from: string = '';
  to: string = 'quintiliani.d@gmail.com';
  subject: string = '';
  text: string = '';

  emailService = inject(EmailService);
  private translate = inject(TranslateService);

  sendEmail() {
    this.emailService
      .sendEmail(this.from, this.to, this.subject, this.text)
      .subscribe({
        next: (response) => (
          (this.showModal = true),
          console.log('Email inviata con successo', response),
          (this.from = ''),
          (this.subject = ''),
          (this.text = '')
        ),
        error: (error) =>
          console.error("Errore durante l'invio dell'email", error),
      });
  }
  closeModal() {
    this.showModal = false;
  }
}
