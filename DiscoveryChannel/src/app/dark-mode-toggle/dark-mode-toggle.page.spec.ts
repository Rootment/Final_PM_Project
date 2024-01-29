import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkModeTogglePage } from './dark-mode-toggle.page';

describe('DarkModeTogglePage', () => {
  let component: DarkModeTogglePage;
  let fixture: ComponentFixture<DarkModeTogglePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DarkModeTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
