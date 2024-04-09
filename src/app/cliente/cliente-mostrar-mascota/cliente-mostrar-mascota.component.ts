import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { UsuarioServiceService } from 'src/app/service/usuario-service.service';

@Component({
  selector: 'app-cliente-mostrar-mascota',
  templateUrl: './cliente-mostrar-mascota.component.html',
  styleUrls: ['./cliente-mostrar-mascota.component.css']
})
export class ClienteMostrarMascotaComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioServiceService,
  ) { }

  mascota!: Mascota;

  ngOnInit(): void {
    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }
}
