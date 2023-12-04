import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCredComponent } from './student-cred.component';

describe('StudentCredComponent', () => {
  let component: StudentCredComponent;
  let fixture: ComponentFixture<StudentCredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCredComponent]
    });
    fixture = TestBed.createComponent(StudentCredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
