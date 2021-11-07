import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugaStranaComponent } from './druga-strana.component';

describe('DrugaStranaComponent', () => {
  let component: DrugaStranaComponent;
  let fixture: ComponentFixture<DrugaStranaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugaStranaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugaStranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
