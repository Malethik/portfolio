import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ClickOutsideDirective } from '../core/directive/click-out-side.directive';
import { TranslateService } from '@ngx-translate/core';
import { MusicService } from '../core/service/music.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ClickOutsideDirective, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() init: boolean | undefined;
  @Output() opened = new EventEmitter();

  active = false;
  private viewportScroller = inject(ViewportScroller);
  private music = inject(MusicService);
  private translate = inject(TranslateService);
  constructor() {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.closeMenu();
  }
  scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.closeMenu();
  }

  onBurgerClicked() {
    this.active = !this.active;
    this.toggleMenuVisibility();
    this.opened.emit();
  }

  closeMenu() {
    this.active = false;
    this.toggleMenuVisibility();
  }
  private toggleMenuVisibility() {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    if (this.active) {
      menu?.classList.add('visible');
      overlay?.classList.add('visible');
    } else {
      menu?.classList.remove('visible');
      overlay?.classList.remove('visible');
    }
  }
  playMusic() {
    this.music.play().catch((error) => {
      console.error('Error attempting to play music:', error);
    });
  }

  pauseMusic() {
    this.music.pause();
  }

  isMusicPlaying(): boolean {
    return this.music.isPlaying();
  }
}
