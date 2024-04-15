import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-mostrar-clientes-todos',
  templateUrl: './admin-mostrar-clientes-todos.component.html',
  styleUrls: ['./admin-mostrar-clientes-todos.component.css']
})
export class AdminMostrarClientesTodosComponent implements OnInit {
  listaClientes!: Cliente[];

  constructor(private clienteService: ClienteServiceService) { }

  ngOnInit(): void {

    this.clienteService.findAll().subscribe(
      (clientes) => this.listaClientes = clientes
    );

    const inputSearch = document.getElementById('myInput') as HTMLInputElement;
    inputSearch.addEventListener('keyup', () => {
      this.filterTable();
    });

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

    const index = this.listaClientes.findIndex((cliente) => cliente.id === id);
    this.listaClientes.splice(index, 1);
  }


  // Función para filtrar la tabla por nombre y estado
  filterTable() {
    const filter = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();

    const filteredClientes = this.listaClientes.filter((cliente) => {
      const nombre = cliente.cedula.toUpperCase();
      return (
        nombre.includes(filter)
      );
    });

    this.listaClientes.forEach((cliente) => {
      const row = document.getElementById(`cliente-row-${cliente.id}`);
      if (row) {
        row.style.display = filteredClientes.includes(cliente)
          ? ''
          : 'none';
      }
    });
  }

}
