import { Component, OnInit } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-vet-modificar-mascota',
  templateUrl: './vet-modificar-mascota.component.html',
  styleUrls: ['./vet-modificar-mascota.component.css']
})
export class VetModificarMascotaComponent implements OnInit {
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
