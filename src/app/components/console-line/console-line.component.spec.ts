import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleLineComponent } from './console-line.component';

describe('ConsoleLineComponent', () => {
  let component: ConsoleLineComponent;
  let fixture: ComponentFixture<ConsoleLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
