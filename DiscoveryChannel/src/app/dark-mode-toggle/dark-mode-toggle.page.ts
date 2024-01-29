/* verze 1
import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: 'dark-mode-toggle.page.html',
  styleUrls: ['dark-mode-toggle.page.scss'],
})
export class DarkModeTogglePage {
  constructor(private darkModeService: DarkModeService) {}

   toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
*/  
/*verze 2
import { Component, OnInit} from '@angular/core';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.page.html',
  styleUrls: ['./dark-mode-toggle.page.scss'],
})
export class DarkModeTogglePage implements OnInit{
  darkMode: boolean;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkMode = this.darkModeService.isDarkMode();
  }
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.darkModeService.setDarkMode(this.darkMode);
  }

}
*/
import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: 'dark-mode-toggle.page.html',
  styleUrls: ['dark-mode-toggle.page.scss'],
})
export class DarkModeTogglePage {
  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}