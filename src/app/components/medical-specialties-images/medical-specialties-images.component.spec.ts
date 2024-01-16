import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSpecialtiesImagesComponent } from './medical-specialties-images.component';

describe('MedicalSpecialtiesImagesComponent', () => {
  let component: MedicalSpecialtiesImagesComponent;
  let fixture: ComponentFixture<MedicalSpecialtiesImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalSpecialtiesImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalSpecialtiesImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
