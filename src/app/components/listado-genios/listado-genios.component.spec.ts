import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoGeniosService } from 'src/app/services/listado-genios.service';

import { ListadoGeniosComponent } from './listado-genios.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMatrialModule } from 'src/app/angular-matrial/angular-matrial.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListadoGeniosComponent', () => {
  let component: ListadoGeniosComponent;
  let fixture: ComponentFixture<ListadoGeniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoGeniosComponent],
      imports:[HttpClientTestingModule, AngularMatrialModule],
      providers:[ListadoGeniosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoGeniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component ListadoGenios ', () => {
    expect(component).toBeTruthy();
  });
});
