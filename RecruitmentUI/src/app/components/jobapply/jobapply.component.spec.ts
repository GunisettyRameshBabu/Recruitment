import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapplyComponent } from './jobapply.component';

describe('JobapplyComponent', () => {
  let component: JobapplyComponent;
  let fixture: ComponentFixture<JobapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
