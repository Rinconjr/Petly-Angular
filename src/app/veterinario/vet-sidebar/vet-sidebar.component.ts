import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veterinario } from 'src/app/models/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-vet-sidebar',
  templateUrl: './vet-sidebar.component.html',
  styleUrls: ['./vet-sidebar.component.css']
})
export class VetSidebarComponent implements OnInit {
  
  constructor(
    private veterinarioService: VeterinarioServiceService,
    private route: ActivatedRoute, 
  ) {  }

  vet!: Veterinario;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('vet_id'));
      
      this.veterinarioService.findById(id).subscribe(
        (llegaVet) => this.vet = llegaVet
      );
    });

    let sidebar = document.querySelector('.sidebar_ok') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }
}
