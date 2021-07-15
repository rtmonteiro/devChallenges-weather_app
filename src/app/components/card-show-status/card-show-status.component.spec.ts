import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShowStatusComponent } from './card-show-status.component';

describe('CardShowStatusComponent', () => {
  let component: CardShowStatusComponent;
  let fixture: ComponentFixture<CardShowStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShowStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShowStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
