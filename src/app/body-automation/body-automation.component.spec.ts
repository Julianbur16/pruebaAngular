import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAutomationComponent } from './body-automation.component';

describe('BodyAutomationComponent', () => {
  let component: BodyAutomationComponent;
  let fixture: ComponentFixture<BodyAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAutomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
