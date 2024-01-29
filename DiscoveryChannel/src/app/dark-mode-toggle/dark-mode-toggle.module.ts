import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkModeTogglePageRoutingModule } from './dark-mode-toggle-routing.module';

import { DarkModeTogglePage } from './dark-mode-toggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkModeTogglePageRoutingModule
  ],
  declarations: []
})
export class DarkModeTogglePageModule {}
