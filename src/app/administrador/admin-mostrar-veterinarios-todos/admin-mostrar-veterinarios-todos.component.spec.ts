import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMostrarVeterinariosTodosComponent } from './admin-mostrar-veterinarios-todos.component';

describe('AdminMostrarVeterinariosTodosComponent', () => {
  let component: AdminMostrarVeterinariosTodosComponent;
  let fixture: ComponentFixture<AdminMostrarVeterinariosTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMostrarVeterinariosTodosComponent]
    });
    fixture = TestBed.createComponent(AdminMostrarVeterinariosTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
