import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-cliente-mostrar-mascota',
  templateUrl: './cliente-mostrar-mascota.component.html',
  styleUrls: ['./cliente-mostrar-mascota.component.css']
})
export class ClienteMostrarMascotaComponent implements OnInit {

  constructor(
    private clienteService: ClienteServiceService,
    private route: ActivatedRoute
  ) { }

  cliente!: Cliente;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const idMascota = Number(params.get('id_mascota'));

      this.clienteService.findClientPet(id, idMascota).subscribe(
        (llegaCliente) => {
          this.cliente = llegaCliente;
          console.log(this.cliente.mascotas);
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
}
