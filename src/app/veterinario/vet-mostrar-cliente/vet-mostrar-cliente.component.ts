import { Component, OnInit } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-vet-mostrar-cliente',
  templateUrl: './vet-mostrar-cliente.component.html',
  styleUrls: ['./vet-mostrar-cliente.component.css']
})
export class VetMostrarClienteComponent implements OnInit {
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
