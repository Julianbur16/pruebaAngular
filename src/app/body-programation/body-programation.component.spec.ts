import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyProgramationComponent } from './body-programation.component';

describe('BodyProgramationComponent', () => {
  let component: BodyProgramationComponent;
  let fixture: ComponentFixture<BodyProgramationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyProgramationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyProgramationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
