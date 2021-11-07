import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrecaStranaComponent } from './treca-strana.component';

describe('TrecaStranaComponent', () => {
  let component: TrecaStranaComponent;
  let fixture: ComponentFixture<TrecaStranaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrecaStranaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrecaStranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
