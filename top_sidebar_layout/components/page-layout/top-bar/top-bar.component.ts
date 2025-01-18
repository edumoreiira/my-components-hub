import { Component, output } from '@angular/core';
import { PageLayoutService } from '../page-layout.service';

@Component({
  selector: 'app-top-bar',
  imports: [],
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {
  constructor(private pageLayoutService: PageLayoutService) {
  
  }

  onMenuClick(){
    this.pageLayoutService.toggleSidebar();
  }
}
