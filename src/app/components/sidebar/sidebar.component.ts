import { CommonModule } from '@angular/common';
import { Component, HostListener, input, OnInit } from '@angular/core';
import { NavbarSections } from '../../models/navbar-items.interface';
import { navbarItemCollapseAnimation, navbarSidebarSlideInOutAnimation } from '../../animations/navbar-transitions.animations';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [navbarItemCollapseAnimation, navbarSidebarSlideInOutAnimation]
})

export class SidebarComponent implements OnInit {
  navbarSections = input<NavbarSections[]>()
  smallScreen = false;
  isCollapsed = false;
  isAutoExpanded = false;
  navbarTimeoutId: any;
  currentRoute = '';

  constructor(private router: Router) {
    if(typeof window !== 'undefined') {
      this.checkMobileScreenSize();
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    })
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

  changeRoute(route:string){
    this.router.navigate([route]);
  }

  onKeyPressed(event:KeyboardEvent, route:string){
    if(event.code === 'Enter' || event.code === 'Space') {
      this.changeRoute(route);
      event.preventDefault();
    }
  }
}
