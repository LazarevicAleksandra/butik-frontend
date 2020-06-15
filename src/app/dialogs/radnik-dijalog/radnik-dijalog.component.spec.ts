import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnikDijalogComponent } from './radnik-dijalog.component';

describe('RadnikDijalogComponent', () => {
  let component: RadnikDijalogComponent;
  let fixture: ComponentFixture<RadnikDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadnikDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadnikDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
