import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorysourceformComponent } from './inventorysourceform.component';

describe('InventorysourceformComponent', () => {
  let component: InventorysourceformComponent;
  let fixture: ComponentFixture<InventorysourceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorysourceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorysourceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
