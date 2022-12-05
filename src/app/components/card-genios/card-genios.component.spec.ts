import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeniosComponent } from './card-genios.component';

describe('CardGeniosComponent', () => {
  let component: CardGeniosComponent;
  let fixture: ComponentFixture<CardGeniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGeniosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGeniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
