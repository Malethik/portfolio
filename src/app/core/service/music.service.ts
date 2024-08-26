import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private audioElement: HTMLAudioElement;
  constructor() {
    this.audioElement = new Audio('assets/OrionTheme.mp3');
    this.audioElement.loop = true;
  }
  play(): Promise<void> {
    return this.audioElement.play().catch((error) => {
      console.error('Error playing the audio:', error);
      return Promise.reject(error);
    });
  }
  pause() {
    this.audioElement.pause();
  }

  isPlaying(): boolean {
    return !this.audioElement.paused;
  }
}
