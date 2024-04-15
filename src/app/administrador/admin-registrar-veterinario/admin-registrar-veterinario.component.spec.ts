import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistrarVeterinarioComponent } from './admin-registrar-veterinario.component';

describe('AdminRegistrarVeterinarioComponent', () => {
  let component: AdminRegistrarVeterinarioComponent;
  let fixture: ComponentFixture<AdminRegistrarVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegistrarVeterinarioComponent]
    });
    fixture = TestBed.createComponent(AdminRegistrarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
