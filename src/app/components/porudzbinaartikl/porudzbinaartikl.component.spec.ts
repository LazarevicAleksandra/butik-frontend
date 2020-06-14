import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorudzbinaartiklComponent } from './porudzbinaartikl.component';

describe('PorudzbinaartiklComponent', () => {
  let component: PorudzbinaartiklComponent;
  let fixture: ComponentFixture<PorudzbinaartiklComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorudzbinaartiklComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorudzbinaartiklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
