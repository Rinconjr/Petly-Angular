import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetMostrarClienteTodosComponent } from './vet-mostrar-cliente-todos.component';

describe('VetMostrarClienteTodosComponent', () => {
  let component: VetMostrarClienteTodosComponent;
  let fixture: ComponentFixture<VetMostrarClienteTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetMostrarClienteTodosComponent]
    });
    fixture = TestBed.createComponent(VetMostrarClienteTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
