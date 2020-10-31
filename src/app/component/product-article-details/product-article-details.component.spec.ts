import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductArticleDetailsComponent } from './product-article-details.component';

describe('ProductArticleDetailsComponent', () => {
  let component: ProductArticleDetailsComponent;
  let fixture: ComponentFixture<ProductArticleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductArticleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductArticleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
