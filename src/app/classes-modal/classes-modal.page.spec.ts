import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassesModalPage } from './classes-modal.page';

describe('ClassesModalPage', () => {
  let component: ClassesModalPage;
  let fixture: ComponentFixture<ClassesModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClassesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
