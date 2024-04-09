import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.css']
})
export class ClienteLoginComponent {
  
  cedulaCliente: string = '';
  listaClientes!: Cliente[];

  constructor(
    private clienteService: ClienteServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(
      (clientes) => this.listaClientes = clientes
    );
  }

  loginCliente() {
    const clienteEncontrado = this.listaClientes.find(cliente => cliente.cedula === this.cedulaCliente);

    if (clienteEncontrado) {
      this.router.navigate(['/usuario/' + clienteEncontrado.id]);
    } else {
      //TODO: Llevar a pagina de error
    }
  }

}
