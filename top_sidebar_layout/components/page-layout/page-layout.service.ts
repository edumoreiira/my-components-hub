import { HostListener, Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {
  private _smallScreen = signal<boolean>(false);
  private _sidebarCollapsed = signal<boolean>(false);
  private renderer: Renderer2;

  get isSmallScreen() {
    return this._smallScreen();
  }
  
  get isSidebarCollapsed() {
    return this._sidebarCollapsed();
  }
  
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null)

    if(typeof window !== 'undefined') {
      this.checkMobileScreenSize(); //checks mobile screen on starting application phase

      this.renderer.listen('window', 'resize', () => this.checkMobileScreenSize()) // checks mobile screen on resize event
    }
  }

  private checkMobileScreenSize(): void {
    this._smallScreen.set(window.innerWidth < 640); //turns true if window width < 640px
  }

  toggleSidebar() {
    this._sidebarCollapsed.update((val) => !val);
  }
  
  collapseSidebar() {
    this._sidebarCollapsed.set(true);
  }

  expandSidebar() {
    this._sidebarCollapsed.set(false);
  }
  

}
