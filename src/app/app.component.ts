import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarSections } from './models/navbar-items.interface';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sidebar';

  navbarSections: NavbarSections[] = [
    {label: 'Menu', collapsed: false, items: [
      {name: 'Home', icon: 'fi-sr-house-chimney', route: '/home'},
      {name: 'Crypto Overview', icon: 'fi-sr-chart-simple', route: '/overview'},
      {name: 'Quests', icon: 'fi-sr-treasure-chest', route: '/quests'},
    ]},
    {label: 'My wallet', collapsed: true, items: [
      {name: 'Dashboard', icon: 'fi-sr-dashboard', route: '/dashboard'},
      {name: 'Exchange', icon: 'fi-sr-exchange-cryptocurrency', route: '/exchange'}
    ]},
  ]
}
