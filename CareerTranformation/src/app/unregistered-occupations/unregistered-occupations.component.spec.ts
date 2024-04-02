import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredOccupationsComponent } from './unregistered-occupations.component';

describe('UnregisteredOccupationsComponent', () => {
  let component: UnregisteredOccupationsComponent;
  let fixture: ComponentFixture<UnregisteredOccupationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredOccupationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnregisteredOccupationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
