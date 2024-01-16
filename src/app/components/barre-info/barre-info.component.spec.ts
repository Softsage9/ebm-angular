import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreInfoComponent } from './barre-info.component';

describe('BarreInfoComponent', () => {
  let component: BarreInfoComponent;
  let fixture: ComponentFixture<BarreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarreInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
