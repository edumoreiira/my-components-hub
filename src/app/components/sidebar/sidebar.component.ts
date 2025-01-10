import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NavbarSections } from '../../models/navbar-items.interface';
import { navbarCollapseAnimation } from '../../animations/navbar-transitions.animations';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [navbarCollapseAnimation]
})

export class SidebarComponent {
  navbarSections = input<NavbarSections[]>()
  isCollapsed = false;


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
