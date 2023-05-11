import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionDivisasComponent } from './cotizacion-divisas.component';

describe('CotizacionDivisasComponent', () => {
  let component: CotizacionDivisasComponent;
  let fixture: ComponentFixture<CotizacionDivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionDivisasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionDivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
