import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-vet-mostrar-cliente-todos',
  templateUrl: './vet-mostrar-cliente-todos.component.html',
  styleUrls: ['./vet-mostrar-cliente-todos.component.css']
})
export class VetMostrarClienteTodosComponent implements OnInit {
  listaClientes!: Cliente[];

  constructor(private clienteService: ClienteServiceService) { }

  ngOnInit(): void {

    this.clienteService.findAll().subscribe(
      (clientes) => this.listaClientes = clientes
    );

    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }

  mostrarAlerta(idCliente: any) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Eliminar cliente</span>',
      html: '¿Estás seguro que quieres eliminar al cliente?',
      imageUrl: "../../../assets/images/popup.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      showCancelButton: true,
      cancelButtonColor: '#898989',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3468c0',
      confirmButtonText: 'Eliminar',
      customClass: {
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class'
      },
      reverseButtons: true,
    }).then((result) => {
      // Resultado de la alerta
      if (result.isConfirmed) {
        this.eliminarCliente(idCliente);
      }
    });
  }

  eliminarCliente(id: any) {
    this.clienteService.deleteClient(id);
  }
}
