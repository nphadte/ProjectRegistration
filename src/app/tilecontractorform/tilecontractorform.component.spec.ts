import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilecontractorformComponent } from './tilecontractorform.component';

describe('TilecontractorformComponent', () => {
  let component: TilecontractorformComponent;
  let fixture: ComponentFixture<TilecontractorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilecontractorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilecontractorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
