import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {

  public cliente: Cliente= new Cliente();

  constructor(
    private route: ActivatedRoute,
      private router: Router,
  )

  {
    this.route.params.subscribe((params: Params) => {
      //this.cliente = params['cliente'];
      this.cliente.primerNombre=params['primerNombre'];
      this.cliente.primerApellido=params['primerApellido'];
      this.cliente.segundoNombre=params['segundoNombre'];
      this.cliente.segundoApellido=params['segundoApellido'];
      this.cliente.telefono=params['telefono'];
      this.cliente.direccion=params['direccion'];
      this.cliente.ciudadResidencia=params['ciudadResidencia'];

      });
  }


}


