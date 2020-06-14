import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDijalogComponent } from './model-dijalog.component';

describe('ModelDijalogComponent', () => {
  let component: ModelDijalogComponent;
  let fixture: ComponentFixture<ModelDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
