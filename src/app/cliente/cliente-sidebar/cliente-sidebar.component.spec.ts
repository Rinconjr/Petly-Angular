import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSidebarComponent } from './cliente-sidebar.component';

describe('ClienteSidebarComponent', () => {
  let component: ClienteSidebarComponent;
  let fixture: ComponentFixture<ClienteSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteSidebarComponent]
    });
    fixture = TestBed.createComponent(ClienteSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
