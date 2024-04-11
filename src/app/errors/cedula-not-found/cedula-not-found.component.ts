import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cedula-not-found',
  templateUrl: './cedula-not-found.component.html',
  styleUrls: ['./cedula-not-found.component.css']
})
export class CedulaNotFoundComponent {

  constructor(
    private route: ActivatedRoute
  ) { }

  cedula!: string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const cedula = String(params.get('cedula'));
      this.cedula = cedula;
    });
  }

  goBack() {
    window.history.back();
  }
}
