import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultIssuesComponent } from './result-issues.component';

describe('ResultIssuesComponent', () => {
  let component: ResultIssuesComponent;
  let fixture: ComponentFixture<ResultIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
