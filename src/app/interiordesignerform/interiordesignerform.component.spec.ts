import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriordesignerformComponent } from './interiordesignerform.component';

describe('InteriordesignerformComponent', () => {
  let component: InteriordesignerformComponent;
  let fixture: ComponentFixture<InteriordesignerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriordesignerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriordesignerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
