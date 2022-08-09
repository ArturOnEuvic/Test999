import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestowaComponent } from './testowa.component';

describe('TestowaComponent', () => {
  let component: TestowaComponent;
  let fixture: ComponentFixture<TestowaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestowaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestowaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
