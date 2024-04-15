import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-registrar-cliente',
  templateUrl: './admin-registrar-cliente.component.html',
  styleUrls: ['./admin-registrar-cliente.component.css']
})
export class AdminRegistrarClienteComponent {

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
    
    this.mostrarAlerta(this.sendCliente);
  }

  mostrarAlerta(cliente: Cliente) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Se ha creado un nuevo cliente</span>',
      html: 'Se ha creado el cliente:  ' + cliente.nombre + '  con la cedula:  ' + cliente.cedula,
      imageUrl: "../../../assets/images/popup.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      confirmButtonColor: '#3468c0',
      confirmButtonText: 'Siguiente',
      customClass: {
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class'
      },
      reverseButtons: true,
    }).then((result) => {
      // Resultado de la alerta
      if (result.isConfirmed) {
        this.router.navigate(['/veterinario/clientes/all']);
      }
    });
  }

}
