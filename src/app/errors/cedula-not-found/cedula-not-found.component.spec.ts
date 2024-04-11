import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaNotFoundComponent } from './cedula-not-found.component';

describe('CedulaNotFoundComponent', () => {
  let component: CedulaNotFoundComponent;
  let fixture: ComponentFixture<CedulaNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CedulaNotFoundComponent]
    });
    fixture = TestBed.createComponent(CedulaNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
