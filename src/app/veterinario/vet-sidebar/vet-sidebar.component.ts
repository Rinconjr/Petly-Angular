import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veterinario } from 'src/app/models/veterinario';
import { UserServiceService } from 'src/app/service/user-service.service';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-vet-sidebar',
  templateUrl: './vet-sidebar.component.html',
  styleUrls: ['./vet-sidebar.component.css']
})
export class VetSidebarComponent implements OnInit {
  
  constructor(
    private veterinarioService: VeterinarioServiceService,
    private userService: UserServiceService,
    private route: ActivatedRoute, 
  ) {  }

  vet!: Veterinario;

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      window.location.href = '/#/login/veterinario';
    } else {
      this.userService.encontrarRolToken().subscribe(
        (rol) => {
          if(rol != 2)
              window.location.href = '/#/login/veterinario';
        }
      );
    }

    this.veterinarioService.vetHome().subscribe(
      (llegaVet) => {
        this.vet = llegaVet
      }
    )

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
