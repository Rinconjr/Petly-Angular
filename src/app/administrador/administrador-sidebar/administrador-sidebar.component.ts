import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-administrador-sidebar',
  templateUrl: './administrador-sidebar.component.html',
  styleUrls: ['./administrador-sidebar.component.css']
})
export class AdministradorSidebarComponent implements OnInit {

  constructor(
    private userService: UserServiceService,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      window.location.href = '/#/login/veterinario';
    } else {
      this.userService.encontrarRolToken().subscribe(
        (rol) => {
          if(rol != 1)
              window.location.href = '/#/login/veterinario';
        }
      );
    }

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
