import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmToolBarComponent } from './adm-tool-bar.component';

describe('AdmToolBarComponent', () => {
  let component: AdmToolBarComponent;
  let fixture: ComponentFixture<AdmToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmToolBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
