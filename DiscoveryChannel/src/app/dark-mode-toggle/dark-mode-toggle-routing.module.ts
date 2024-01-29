import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkModeTogglePage } from './dark-mode-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: DarkModeTogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkModeTogglePageRoutingModule {}
