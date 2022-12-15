import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { CardGeniosComponent } from './card-genios.component';
import { AngularMatrialModule } from '../../angular-matrial/angular-matrial.module';

describe('CardGeniosComponent', () => {
  let component: CardGeniosComponent;
  let fixture: ComponentFixture<CardGeniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardGeniosComponent],
      imports: [AngularMatrialModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardGeniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create card genio', () => {
    expect(component).toBeTruthy();
  });

  it(' Saber si la varibale genio esta inicializada ', () => {
    let valueGenio: boolean;
    valueGenio = component.genio !== null || component.genio !== undefined;
    expect(valueGenio).toBeTrue();
  });

  it(' Debe mostrase correctamente el valor de puesto del genio en el html ', () => {
    const compiled:HTMLElement = fixture.nativeElement
    expect(compiled.querySelector('.position')?.textContent?.trim()).toEqual(component.genio.position)  
  });
});
