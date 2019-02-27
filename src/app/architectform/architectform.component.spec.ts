import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectformComponent } from './architectform.component';

describe('ArchitectformComponent', () => {
  let component: ArchitectformComponent;
  let fixture: ComponentFixture<ArchitectformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
