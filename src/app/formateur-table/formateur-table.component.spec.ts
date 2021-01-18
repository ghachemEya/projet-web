
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurTableComponent } from './formateur-table.component';

describe('FormateurTableComponent', () => {
  let component: FormateurTableComponent;
  let fixture: ComponentFixture<FormateurTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormateurTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
