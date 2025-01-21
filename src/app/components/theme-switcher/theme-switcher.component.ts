import { DOCUMENT } from '@angular/common';
import { Component, Inject, HostBinding } from '@angular/core';


@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {
  isDarkActive: boolean = false

  constructor(@Inject(DOCUMENT) private document: Document){}

  toggleDarkMode(){
    this.isDarkActive = !this.isDarkActive;
    this.UpdateBodyClass()
  }
  UpdateBodyClass(): void {
    if(this.isDarkActive){
      this.document.body.classList.add('dark-mode')
    }else{
      this.document.body.classList.remove('dark-mode')
    }
  }

}
