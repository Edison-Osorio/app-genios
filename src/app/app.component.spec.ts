import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { AngularMatrialModule } from './angular-matrial/angular-matrial.module';
import { ListadoGeniosComponent } from './components/listado-genios/listado-genios.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavegacionComponent, 
        ListadoGeniosComponent
      ],
      imports:[AngularMatrialModule, HttpClientModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app-genios'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-genios');
  });
});
