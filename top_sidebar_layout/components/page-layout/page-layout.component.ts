import { Component, inject, input } from '@angular/core';
import { SidebarSections } from '../../models/navbar-items.interface';
import { CommonModule } from '@angular/common';
import { navbarItemCollapseAnimation, navbarSidebarSlideInOutAnimation } from '../../animations/navbar-transitions.animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { PageLayoutService } from './page-layout.service';

@Component({
  selector: 'app-page-layout',
  imports: [CommonModule, SidebarComponent, TopBarComponent],
  templateUrl: './page-layout.component.html',
  animations: [navbarItemCollapseAnimation, navbarSidebarSlideInOutAnimation]
})
export class PageLayoutComponent{
  private pageLayoutService = inject(PageLayoutService);
  sidebarSections = input<SidebarSections[]>()
  
  get isCollapsed() {
    return this.pageLayoutService.isSidebarCollapsed
  }
  
  get smallScreen() {
    return this.pageLayoutService.isSmallScreen;
  }
}

