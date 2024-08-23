import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'https://motomarket.onrender.com/email/send'; // Modifica con l'URL del tuo backend

  constructor(private http: HttpClient) {}

  sendEmail(
    from: string,
    to: string,
    subject: string,
    text: string
  ): Observable<any> {
    const body = new URLSearchParams();
    body.set('from', from);
    body.set('to', to);
    body.set('subject', subject);
    body.set('text', text);

    return this.http.post(this.apiUrl, body.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
