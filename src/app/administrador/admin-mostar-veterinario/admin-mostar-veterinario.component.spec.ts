import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMostarVeterinarioComponent } from './admin-mostar-veterinario.component';

describe('AdminMostarVeterinarioComponent', () => {
  let component: AdminMostarVeterinarioComponent;
  let fixture: ComponentFixture<AdminMostarVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMostarVeterinarioComponent]
    });
    fixture = TestBed.createComponent(AdminMostarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
