import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDrawMechanicsComponent } from './body-draw-mechanics.component';

describe('BodyDrawMechanicsComponent', () => {
  let component: BodyDrawMechanicsComponent;
  let fixture: ComponentFixture<BodyDrawMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyDrawMechanicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyDrawMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
