import { CommonModule } from '@angular/common';
import { Component, HostListener, input } from '@angular/core';
import { NavbarSections } from '../../models/navbar-items.interface';
import { navbarItemCollapseAnimation, navbarSidebarSlideInOutAnimation } from '../../animations/navbar-transitions.animations';
import exp from 'constants';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [navbarItemCollapseAnimation, navbarSidebarSlideInOutAnimation]
})

export class SidebarComponent {
  navbarSections = input<NavbarSections[]>()
  smallScreen = false;
  isCollapsed = false;
  isAutoExpanded = false;
  navbarTimeoutId: any;

  constructor() {
    if(typeof window !== 'undefined') {
      this.checkMobileScreenSize();
    }
  }

  onMouseEnterSidebar(): void {
    this.navbarTimeoutId = setTimeout(() => {
      this.autoExpandSidebar();
    }, 700);
  }

  onMouseLeaveSidebar(): void {
    if(this.navbarTimeoutId) {
      clearTimeout(this.navbarTimeoutId);
      if(this.isAutoExpanded) {
        this.autoCollapseSidebar();
      }
    }
  }

  @HostListener('window:resize', ['$event']) //keep track of window resize
  onResize(): void {
    this.checkMobileScreenSize();
  }

  private checkMobileScreenSize(): void {
    this.smallScreen = window.innerWidth < 640; //turns true if window width < 640px
  }

  collapseSidebar() {
    this.isCollapsed = true;
  }
  
  expandSidebar() {
    this.isCollapsed = false;
  }

  autoExpandSidebar() {
    this.expandSidebar();
    this.isAutoExpanded = true;
  }

  autoCollapseSidebar() {
    this.collapseSidebar();
    this.isAutoExpanded = false;
  }

  toggleSidebar() {
    this.isCollapsed ? this.expandSidebar() : this.collapseSidebar();
  }
}
