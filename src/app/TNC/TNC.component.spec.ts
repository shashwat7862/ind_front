import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TNCComponent } from './TNC.component';

describe('TNCComponent', () => {
  let component: TNCComponent;
  let fixture: ComponentFixture<TNCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TNCComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TNCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
