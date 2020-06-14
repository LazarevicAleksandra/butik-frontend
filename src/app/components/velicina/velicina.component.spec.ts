import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelicinaComponent } from './velicina.component';

describe('VelicinaComponent', () => {
  let component: VelicinaComponent;
  let fixture: ComponentFixture<VelicinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelicinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
