import { Component, OnInit } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-cliente-mostrar-mascota',
  templateUrl: './cliente-mostrar-mascota.component.html',
  styleUrls: ['./cliente-mostrar-mascota.component.css']
})
export class ClienteMostrarMascotaComponent implements OnInit {
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
