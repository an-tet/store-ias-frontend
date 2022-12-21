import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { HttpClientModule } from '@angular/common/http';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.user = {
      username: 'prueba',
      email: 'prueba@yopmail.com',
      isActive: true,
      firstName: 'prueba',
      lastName: 'de sidebar',
      roles: ['user'],
      token: 'slkdjfsk',
      error: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
