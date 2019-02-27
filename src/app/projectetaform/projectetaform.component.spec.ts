import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectetaformComponent } from './projectetaform.component';

describe('ProjectetaformComponent', () => {
  let component: ProjectetaformComponent;
  let fixture: ComponentFixture<ProjectetaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectetaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectetaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
