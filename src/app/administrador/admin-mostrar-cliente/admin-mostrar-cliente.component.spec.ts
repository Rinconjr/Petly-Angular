import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMostrarClienteComponent } from './admin-mostrar-cliente.component';

describe('AdminMostrarClienteComponent', () => {
  let component: AdminMostrarClienteComponent;
  let fixture: ComponentFixture<AdminMostrarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMostrarClienteComponent]
    });
    fixture = TestBed.createComponent(AdminMostrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
