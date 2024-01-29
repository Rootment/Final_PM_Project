/*verze 1
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
}
*/

/*verze 2
import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  darkMode = false;
  
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.isDarkMode.subscribe((value) => {
      this.darkMode = value;
    });
  }
}
*/
import { Component, OnInit} from '@angular/core';
import { DarkModeService } from './services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  darkMode = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.isDarkMode.subscribe((value) => {
      this.darkMode = value;
    });
  }
  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}