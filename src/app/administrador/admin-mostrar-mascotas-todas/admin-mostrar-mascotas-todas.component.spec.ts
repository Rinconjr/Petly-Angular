import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMostrarMascotasTodasComponent } from './admin-mostrar-mascotas-todas.component';

describe('AdminMostrarMascotasTodasComponent', () => {
  let component: AdminMostrarMascotasTodasComponent;
  let fixture: ComponentFixture<AdminMostrarMascotasTodasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMostrarMascotasTodasComponent]
    });
    fixture = TestBed.createComponent(AdminMostrarMascotasTodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
