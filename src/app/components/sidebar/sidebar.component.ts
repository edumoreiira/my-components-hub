import { CommonModule } from '@angular/common';
import { Component, HostListener, input } from '@angular/core';
import { NavbarSections } from '../../models/navbar-items.interface';
import { navbarItemCollapseAnimation, navbarSidebarSlideInOutAnimation } from '../../animations/navbar-transitions.animations';

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

  constructor() {
    if(typeof window !== 'undefined') {
      this.checkMobileScreenSize();
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

  toggleSidebar() {
    this.isCollapsed ? this.expandSidebar() : this.collapseSidebar();
  }
}
