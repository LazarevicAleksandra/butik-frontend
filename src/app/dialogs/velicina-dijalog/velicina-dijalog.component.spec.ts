import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelicinaDijalogComponent } from './velicina-dijalog.component';

describe('VelicinaDijalogComponent', () => {
  let component: VelicinaDijalogComponent;
  let fixture: ComponentFixture<VelicinaDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelicinaDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelicinaDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
