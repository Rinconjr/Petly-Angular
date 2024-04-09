import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-vet-mostrar-cliente',
  templateUrl: './vet-mostrar-cliente.component.html',
  styleUrls: ['./vet-mostrar-cliente.component.css']
})
export class VetMostrarClienteComponent implements OnInit {

  cliente!: Cliente;

  constructor(
    private clienteService: ClienteServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      this.clienteService.findById(id).subscribe(
        (llegaCliente) => this.cliente = llegaCliente
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
