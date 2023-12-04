import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduloanComponent } from './eduloan.component';

describe('EduloanComponent', () => {
  let component: EduloanComponent;
  let fixture: ComponentFixture<EduloanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EduloanComponent]
    });
    fixture = TestBed.createComponent(EduloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
