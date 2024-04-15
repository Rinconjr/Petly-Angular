import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-dashboard',
  templateUrl: './administrador-dashboard.component.html',
  styleUrls: ['./administrador-dashboard.component.css']
})
export class AdministradorDashboardComponent implements OnInit{
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
