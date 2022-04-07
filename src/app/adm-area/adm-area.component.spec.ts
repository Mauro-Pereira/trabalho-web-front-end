import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAreaComponent } from './adm-area.component';

describe('AdmAreaComponent', () => {
  let component: AdmAreaComponent;
  let fixture: ComponentFixture<AdmAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
