import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModificarVeterinarioComponent } from './admin-modificar-veterinario.component';

describe('AdminModificarVeterinarioComponent', () => {
  let component: AdminModificarVeterinarioComponent;
  let fixture: ComponentFixture<AdminModificarVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminModificarVeterinarioComponent]
    });
    fixture = TestBed.createComponent(AdminModificarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
