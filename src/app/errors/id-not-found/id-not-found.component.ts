import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-id-not-found',
  templateUrl: './id-not-found.component.html',
  styleUrls: ['./id-not-found.component.css']
})
export class IdNotFoundComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  vet_id!: number;
  tipo!: string;
  id!: number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vet_id = Number(params.get('vet_id'));
      this.tipo = String(params.get('tipo'));
      this.id = Number(params.get('id'));
    });
  }

  goBack() {
    if(this.tipo === 'cliente')
      this.router.navigate(['/veterinario/' + this.vet_id + '/clientes/all']);
    
    else if(this.tipo === 'mascota')
      this.router.navigate(['/veterinario/' + this.vet_id + '/mascotas/all']);
  }
}
