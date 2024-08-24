import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ProfileComponent } from './profile/profile.component';
import { ContacsComponent } from './contacs/contacs.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { StudyComponent } from './study/study.component';
import { PingService } from './core/service/ping.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    StudyComponent,
    FooterComponent,
    ProfileComponent,
    ContacsComponent,
    WorkComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  //ping server for wake-up and permit use nodemailer
  private ping = inject(PingService);

  ngOnInit() {
    this.ping.getPingServer().subscribe({
      next: (response) => console.log('Server response:', response),
      error: (error) => console.error('Error pinging server:', error),
    });
    this.ping.startPinging(840000);
  }
}
