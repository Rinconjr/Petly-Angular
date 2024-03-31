import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSearchbarComponent } from './searchbar-mascota-nombre.component';

describe('ClienteSearchbarComponent', () => {
  let component: ClienteSearchbarComponent;
  let fixture: ComponentFixture<ClienteSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteSearchbarComponent]
    });
    fixture = TestBed.createComponent(ClienteSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
