import { Component } from '@angular/core';
import { SidebarSections } from './models/navbar-items.interface';
import { PageLayoutComponent } from "./components/page-layout/page-layout.component";

@Component({
  selector: 'app-root',
  imports: [PageLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sidebar';

  sidebarSections: SidebarSections[] = [
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
