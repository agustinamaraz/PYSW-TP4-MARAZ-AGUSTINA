import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionTextoAudioComponent } from './conversion-texto-audio.component';

describe('ConversionTextoAudioComponent', () => {
  let component: ConversionTextoAudioComponent;
  let fixture: ComponentFixture<ConversionTextoAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionTextoAudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionTextoAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
