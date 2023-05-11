import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalMusicaComponent } from './portal-musica.component';

describe('PortalMusicaComponent', () => {
  let component: PortalMusicaComponent;
  let fixture: ComponentFixture<PortalMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalMusicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
