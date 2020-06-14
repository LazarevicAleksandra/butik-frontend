import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkaDijalogComponent } from './marka-dijalog.component';

describe('MarkaDijalogComponent', () => {
  let component: MarkaDijalogComponent;
  let fixture: ComponentFixture<MarkaDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkaDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkaDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
