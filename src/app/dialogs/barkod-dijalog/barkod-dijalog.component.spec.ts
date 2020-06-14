import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarkodDijalogComponent } from './barkod-dijalog.component';

describe('BarkodDijalogComponent', () => {
  let component: BarkodDijalogComponent;
  let fixture: ComponentFixture<BarkodDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarkodDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarkodDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
