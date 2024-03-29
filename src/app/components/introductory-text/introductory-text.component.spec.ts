import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductoryTextComponent } from './introductory-text.component';

describe('IntroductoryTextComponent', () => {
  let component: IntroductoryTextComponent;
  let fixture: ComponentFixture<IntroductoryTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductoryTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroductoryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
