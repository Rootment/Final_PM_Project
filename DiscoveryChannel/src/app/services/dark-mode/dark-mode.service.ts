import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  /*1.verze
   private darkMode = new BehaviorSubject<boolean>(false);

  isDarkMode = this.darkMode.asObservable();

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }*/
  /*2.verze
  isDarkMode(): boolean {
    const darkModeValue = localStorage.getItem(DARK_MODE_KEY);
    return darkModeValue ? JSON.parse(darkModeValue) : false;
  }

  setDarkMode(value: boolean): void {
    localStorage.setItem(DARK_MODE_KEY, JSON.stringify(value));
    document.body.classList.toggle('dark', value);
  }*/
  private darkMode = new BehaviorSubject<boolean>(false);

  isDarkMode = this.darkMode.asObservable();

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }
}
