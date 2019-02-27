import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralcontractorformComponent } from './generalcontractorform.component';

describe('GeneralcontractorformComponent', () => {
  let component: GeneralcontractorformComponent;
  let fixture: ComponentFixture<GeneralcontractorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralcontractorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralcontractorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
