import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetModificarMascotaComponent } from './vet-modificar-mascota.component';

describe('VetModificarMascotaComponent', () => {
  let component: VetModificarMascotaComponent;
  let fixture: ComponentFixture<VetModificarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetModificarMascotaComponent]
    });
    fixture = TestBed.createComponent(VetModificarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
