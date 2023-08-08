import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecthunterComponent } from './projecthunter.component';

describe('ProjecthunterComponent', () => {
  let component: ProjecthunterComponent;
  let fixture: ComponentFixture<ProjecthunterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjecthunterComponent]
    });
    fixture = TestBed.createComponent(ProjecthunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
