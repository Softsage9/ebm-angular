import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame16Component } from './frame16.component';

describe('Frame16Component', () => {
  let component: Frame16Component;
  let fixture: ComponentFixture<Frame16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frame16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Frame16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
