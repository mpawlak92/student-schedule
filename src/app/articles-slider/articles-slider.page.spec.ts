import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesSliderPage } from './articles-slider.page';

describe('ArticlesSliderPage', () => {
  let component: ArticlesSliderPage;
  let fixture: ComponentFixture<ArticlesSliderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArticlesSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
