import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, input, OnInit } from '@angular/core';
import { SidebarSections } from '../../../models/navbar-items.interface';
import { navbarItemCollapseAnimation, navbarSidebarSlideInOutAnimation } from '../../../animations/navbar-transitions.animations';
import { Router, RouterLink } from '@angular/router';
import { PageLayoutService } from '../page-layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [navbarItemCollapseAnimation, navbarSidebarSlideInOutAnimation]
})

export class SidebarComponent implements OnInit {
  private pageLayoutService = inject(PageLayoutService);
  sidebarSections = input<SidebarSections[]>()
  isAutoExpanded = false;
  navbarTimeoutId: any;
  currentRoute = '';

  get smallScreen() {
    return this.pageLayoutService.isSmallScreen;
  }

  get isCollapsed() {
    return this.pageLayoutService.isSidebarCollapsed;
  }

  constructor(private router: Router) {
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

  collapseSidebar() {
    this.pageLayoutService.collapseSidebar();
  }
  
  expandSidebar() {
    this.pageLayoutService.expandSidebar();
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
