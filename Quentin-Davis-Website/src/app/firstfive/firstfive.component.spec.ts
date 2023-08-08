import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstfiveComponent } from './firstfive.component';

describe('FirstfiveComponent', () => {
  let component: FirstfiveComponent;
  let fixture: ComponentFixture<FirstfiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstfiveComponent]
    });
    fixture = TestBed.createComponent(FirstfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
