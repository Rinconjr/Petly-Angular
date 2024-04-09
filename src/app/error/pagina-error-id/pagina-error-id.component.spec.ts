import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaErrorIdComponent } from './pagina-error-id.component';

describe('PaginaErrorIdComponent', () => {
  let component: PaginaErrorIdComponent;
  let fixture: ComponentFixture<PaginaErrorIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaErrorIdComponent]
    });
    fixture = TestBed.createComponent(PaginaErrorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
