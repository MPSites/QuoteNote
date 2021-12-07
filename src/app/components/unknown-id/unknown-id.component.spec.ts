import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownIdComponent } from './unknown-id.component';

describe('UnknownIdComponent', () => {
  let component: UnknownIdComponent;
  let fixture: ComponentFixture<UnknownIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
