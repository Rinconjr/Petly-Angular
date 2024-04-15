import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-sidebar',
  templateUrl: './administrador-sidebar.component.html',
  styleUrls: ['./administrador-sidebar.component.css']
})
export class AdministradorSidebarComponent implements OnInit {
  ngOnInit(): void {
    let sidebar = document.querySelector('.sidebar_ok') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }
}
