import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarkodComponent } from './barkod.component';

describe('BarkodComponent', () => {
  let component: BarkodComponent;
  let fixture: ComponentFixture<BarkodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarkodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarkodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
