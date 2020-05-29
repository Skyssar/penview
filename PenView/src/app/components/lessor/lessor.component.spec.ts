import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessorComponent } from './lessor.component';

describe('LessorComponent', () => {
  let component: LessorComponent;
  let fixture: ComponentFixture<LessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
