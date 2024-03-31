import { Component, OnInit } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-vet-mostrar-mascota-todas',
  templateUrl: './vet-mostrar-mascota-todas.component.html',
  styleUrls: ['./vet-mostrar-mascota-todas.component.css']
})
export class VetMostrarMascotaTodasComponent implements OnInit {
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
