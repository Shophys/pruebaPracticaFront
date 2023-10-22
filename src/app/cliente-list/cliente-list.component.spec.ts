import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListComponent } from './cliente-list.component';
import { ClienteService } from '../cliente-service.service';
import { HttpClient } from '@angular/common/http';

class MockClienteService {
  constructor(private http: HttpClient) {
  }

  public findAll(tipoDocumento:string, numeroDocumento:number){
    return {

        primerNombre: "Maria",
        segundoNombre: "José",
        primerApellido: "Alvarez",
        segundoApellido: "Triana",
        telefono: 1234567912,
        direccion: "Carrera 56 No. 4C-25",
        ciudadResidencia: "Bogotá",
        tipoDocumento: "C",
        numeroDocumento: 23445322,
        id: null
        }
    }
  }



describe('ClienteListComponent', () => {
  let component: ClienteListComponent;
  let fixture: ComponentFixture<ClienteListComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteListComponent]
    });
    fixture = TestBed.createComponent(ClienteListComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('send ', () => {

    expect(component.cliente?.ciudadResidencia).toBeTruthy();
  });


});
