import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpened: boolean = false;

  onHamburgerClick():void {
    this.menuOpened = true;
  }

  onModalClick(): void {
    this.menuOpened = false;
  }

}
