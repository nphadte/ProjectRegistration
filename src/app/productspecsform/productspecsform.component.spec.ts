import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductspecsformComponent } from './productspecsform.component';

describe('ProductspecsformComponent', () => {
  let component: ProductspecsformComponent;
  let fixture: ComponentFixture<ProductspecsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductspecsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductspecsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
