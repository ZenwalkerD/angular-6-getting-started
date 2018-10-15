import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsToProductsComponent } from './comments-to-products.component';

describe('CommentsToProductsComponent', () => {
  let component: CommentsToProductsComponent;
  let fixture: ComponentFixture<CommentsToProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsToProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsToProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
