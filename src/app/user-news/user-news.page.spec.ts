import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserNewsPage } from './user-news.page';

describe('UserNewsPage', () => {
  let component: UserNewsPage;
  let fixture: ComponentFixture<UserNewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
