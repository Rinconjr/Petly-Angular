import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { UsuarioServiceService } from 'src/app/service/usuario-service.service';

@Component({
  selector: 'app-cliente-sidebar',
  templateUrl: './cliente-sidebar.component.html',
  styleUrls: ['./cliente-sidebar.component.css']
})

export class ClienteSidebarComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioServiceService,
    private route: ActivatedRoute
  ) { }

  cliente!: Cliente;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      this.usuarioService.findMyPets(id).subscribe(
        (llegaCliente) => this.cliente = llegaCliente
      );
    });

    let sidebar = document.querySelector('.sidebar_ok') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }
}
