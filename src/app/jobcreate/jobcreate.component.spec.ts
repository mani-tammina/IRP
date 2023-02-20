import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcreateComponent } from './jobcreate.component';

describe('JobcreateComponent', () => {
  let component: JobcreateComponent;
  let fixture: ComponentFixture<JobcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
