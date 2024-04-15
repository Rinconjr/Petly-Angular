import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMostrarClientesTodosComponent } from './admin-mostrar-clientes-todos.component';

describe('AdminMostrarClientesTodosComponent', () => {
  let component: AdminMostrarClientesTodosComponent;
  let fixture: ComponentFixture<AdminMostrarClientesTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMostrarClientesTodosComponent]
    });
    fixture = TestBed.createComponent(AdminMostrarClientesTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
