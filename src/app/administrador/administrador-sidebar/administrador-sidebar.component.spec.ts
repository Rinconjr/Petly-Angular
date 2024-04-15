import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorSidebarComponent } from './administrador-sidebar.component';

describe('AdministradorSidebarComponent', () => {
  let component: AdministradorSidebarComponent;
  let fixture: ComponentFixture<AdministradorSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorSidebarComponent]
    });
    fixture = TestBed.createComponent(AdministradorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
