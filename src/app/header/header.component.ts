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
    console.log('click')
  }

  onModalClick(): void {
    this.menuOpened = false;
  }

}
