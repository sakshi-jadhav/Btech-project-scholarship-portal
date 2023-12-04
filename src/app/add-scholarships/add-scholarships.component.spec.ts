import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScholarshipsComponent } from './add-scholarships.component';

describe('AddScholarshipsComponent', () => {
  let component: AddScholarshipsComponent;
  let fixture: ComponentFixture<AddScholarshipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddScholarshipsComponent]
    });
    fixture = TestBed.createComponent(AddScholarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
