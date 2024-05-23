import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-cliente-sidebar',
  templateUrl: './cliente-sidebar.component.html',
  styleUrls: ['./cliente-sidebar.component.css']
})

export class ClienteSidebarComponent implements OnInit {

  constructor(
    private clienteService: ClienteServiceService,
    private route: ActivatedRoute,
    private userService: UserServiceService,
  ) { }

  cliente!: Cliente;

  ngOnInit(): void {

    if (localStorage.getItem('token') == null) {
      window.location.href = '/#/login/cliente';
    } else {
      this.userService.encontrarRolToken().subscribe(
        (rol) => {
          if(rol != 3)
              window.location.href = '/#/login/veterinario';
        }
      );
    }

    this.clienteService.clienteHome().subscribe(
      (llegaCliente) => {
        this.cliente = llegaCliente;
      }
    );

    let sidebar = document.querySelector('.sidebar_ok') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}
