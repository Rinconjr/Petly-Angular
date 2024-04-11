import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vet-modificar-cliente',
  templateUrl: './vet-modificar-cliente.component.html',
  styleUrls: ['./vet-modificar-cliente.component.css']
})
export class VetModificarClienteComponent implements OnInit {
  constructor(
    private clienteService: ClienteServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  clienteAux!: Cliente;

  llegaCliente!: Cliente;
  formCliente!: Cliente;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.clienteService.findById(id).subscribe(
        (cliente) => {
          this.clienteAux = cliente;
          this.llegaCliente = Object.assign({}, this.clienteAux);
          this.formCliente = Object.assign({}, this.clienteAux);
        }
      );
    });

    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }

  sendCliente!: Cliente;

  actualizarCliente() {
    this.sendCliente = Object.assign({}, this.formCliente);
    this.clienteService.updateClient(this.sendCliente);

    this.mostrarAlerta(this.sendCliente.nombre);
  }

  mostrarAlerta(nombreCliente: string) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Actualizar datos del cliente</span>',
      html: 'Se han actualizado los datos del cliente:  ' + nombreCliente,
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
