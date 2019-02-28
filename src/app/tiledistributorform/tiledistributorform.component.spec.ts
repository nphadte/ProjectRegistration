import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiledistributorformComponent } from './tiledistributorform.component';

describe('TiledistributorformComponent', () => {
  let component: TiledistributorformComponent;
  let fixture: ComponentFixture<TiledistributorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiledistributorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiledistributorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
