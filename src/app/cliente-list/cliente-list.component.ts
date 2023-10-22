import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente-service.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent {
  public loading = false;
  public errorMessage="";
  public searchForm = this.fb.group({
    docNumber: [
      '',
      [
        Validators.required,
        Validators.pattern(new RegExp("^[0-9$]*$")),
        Validators.minLength(8),
        Validators.maxLength(11),
      ],
    ],
    typeNumber: ['', [Validators.required]],
  });
  public cliente: Cliente | undefined;
  //public clienteService:ClienteService | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteService
  ) {
    //   this.clienteService=pclienteService;

  }

  send() {
    this.loading = true;
    const typeNumber = this.searchForm.get("typeNumber")!.value ?? ""
    const docNumber = Number(this.searchForm.get("docNumber")!.value) ?? 0;
    this.clienteService.findAll(typeNumber, docNumber).subscribe((data)=>{
      //this.clienteService.findAll(this.searchForm.get("typeNumber"), this.searchForm.get("typeNumber")).subscribe(()=>{
      this.cliente= new Cliente();
      this.loading = false;
      this.cliente.primerNombre=data.primerNombre;
      //console.log(data);
      this.cliente.primerApellido=data.primerApellido;
      this.router.navigate(['getcliente', data]);

    },error => {
      this.loading = false;
      this.errorMessage = error.error.message
      this.searchForm.reset()
      console.dir({error},{depth:Infinity});

    });

  }
}
