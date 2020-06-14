import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtiklDijalogComponent } from './artikl-dijalog.component';

describe('ArtiklDijalogComponent', () => {
  let component: ArtiklDijalogComponent;
  let fixture: ComponentFixture<ArtiklDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtiklDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtiklDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
