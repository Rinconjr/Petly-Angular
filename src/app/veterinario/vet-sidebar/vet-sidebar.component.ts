import { Component, OnInit } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-vet-sidebar',
  templateUrl: './vet-sidebar.component.html',
  styleUrls: ['./vet-sidebar.component.css']
})
export class VetSidebarComponent implements OnInit {
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
