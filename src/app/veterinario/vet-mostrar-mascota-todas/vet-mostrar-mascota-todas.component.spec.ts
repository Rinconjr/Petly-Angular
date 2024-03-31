import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetMostrarMascotaTodasComponent } from './vet-mostrar-mascota-todas.component';

describe('VetMostrarMascotaTodasComponent', () => {
  let component: VetMostrarMascotaTodasComponent;
  let fixture: ComponentFixture<VetMostrarMascotaTodasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetMostrarMascotaTodasComponent]
    });
    fixture = TestBed.createComponent(VetMostrarMascotaTodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
