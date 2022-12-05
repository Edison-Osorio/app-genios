import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGeniosComponent } from './listado-genios.component';

describe('ListadoGeniosComponent', () => {
  let component: ListadoGeniosComponent;
  let fixture: ComponentFixture<ListadoGeniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoGeniosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoGeniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
