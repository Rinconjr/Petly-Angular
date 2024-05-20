import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Tratamiento } from 'src/app/models/tratamiento';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import { TratamientoServiceService } from 'src/app/service/tratamiento-service.service';

@Component({
  selector: 'app-cliente-mostrar-mascota',
  templateUrl: './cliente-mostrar-mascota.component.html',
  styleUrls: ['./cliente-mostrar-mascota.component.css']
})
export class ClienteMostrarMascotaComponent implements OnInit {

  constructor(
    private clienteService: ClienteServiceService,
    private tratamientoService: TratamientoServiceService,
    private route: ActivatedRoute
  ) { }

  cliente!: Cliente;
  listaTratamientos?: Tratamiento[];
  

  ngOnInit(): void {

    this.clienteService.clienteHome().subscribe(
      (llegaCliente) => {
        this.cliente = llegaCliente;
        
        this.route.paramMap.subscribe(params => {
          const idMascota = Number(params.get('id_mascota'));
    
          this.clienteService.findClientPet(this.cliente.id!, idMascota).subscribe(
            (llegaCliente) => {
              this.cliente = llegaCliente;
              console.log(this.cliente.mascotas);
            }
          );
    
          this.tratamientoService.findByIdPet(this.cliente.id!).subscribe(
            (llegaLista) => {
              this.listaTratamientos = llegaLista;
            }
          );
          
        });
      }
    );


    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }
}
