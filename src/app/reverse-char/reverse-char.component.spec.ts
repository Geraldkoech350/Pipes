import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseCharComponent } from './reverse-char.component';

describe('ReverseCharComponent', () => {
  let component: ReverseCharComponent;
  let fixture: ComponentFixture<ReverseCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseCharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
