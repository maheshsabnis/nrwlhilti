import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlibComponent } from './mainlib.component';

describe('MainlibComponent', () => {
  let component: MainlibComponent;
  let fixture: ComponentFixture<MainlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainlibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
