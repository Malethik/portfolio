import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, interval, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PingService {
  private APIURL = 'https://motomarket.onrender.com';
  private pingSubscription: Subscription | undefined;

  constructor(private http: HttpClient) {}

  getPingServer(): Observable<string> {
    return this.http.get(this.APIURL, { responseType: 'text' });
  }

  startPinging(intervalTime: number = 840000): void {
    this.pingSubscription = interval(intervalTime)
      .pipe(switchMap(() => this.getPingServer()))
      .subscribe({
        next: (response) => console.log('Server response:', response),
        error: (error) => console.error('Error pinging server:', error),
      });
  }
}
