import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
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
