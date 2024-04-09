import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-vet-registrar-cliente',
  templateUrl: './vet-registrar-cliente.component.html',
  styleUrls: ['./vet-registrar-cliente.component.css']
})
export class VetRegistrarClienteComponent {

  constructor(
    private clienteService: ClienteServiceService,
    private router: Router,
    ) {}

  formCliente = {
    id: 0,
    cedula: '',
    nombre: '',
    apellido: '',
    correo: '',
    celular: ''
  }

  sendCliente!: Cliente;
  
  agregarCliente(){
    this.sendCliente = Object.assign({}, this.formCliente);
    this.clienteService.addClient(this.sendCliente);
    this.router.navigate(['/veterinario/clientes/all']);
  }

}
