import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  currentYear = new Date().getFullYear();

  age: number;
  private translate = inject(TranslateService);

  constructor() {
    this.age = this.currentYear - 1986;
  }
}
