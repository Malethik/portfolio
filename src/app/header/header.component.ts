import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClickOutsideDirective } from '../core/directive/click-out-side.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @Input() init: boolean | undefined;
  @Output() opened = new EventEmitter();
  active = false;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.active = this.init || false;
  }
  scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
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
    if (this.active) {
      menu?.classList.add('visible');
    } else {
      menu?.classList.remove('visible');
    }
  }
}
