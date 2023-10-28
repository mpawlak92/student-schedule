import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleModalPage } from './article-modal.page';

describe('ArticleModalPage', () => {
  let component: ArticleModalPage;
  let fixture: ComponentFixture<ArticleModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArticleModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
