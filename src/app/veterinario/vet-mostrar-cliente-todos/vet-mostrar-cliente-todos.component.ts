import { Component, OnInit } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-vet-mostrar-cliente-todos',
  templateUrl: './vet-mostrar-cliente-todos.component.html',
  styleUrls: ['./vet-mostrar-cliente-todos.component.css']
})
export class VetMostrarClienteTodosComponent implements OnInit {
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
