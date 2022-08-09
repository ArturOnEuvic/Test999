import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentyComponent } from './componenty.component';

describe('ComponentyComponent', () => {
  let component: ComponentyComponent;
  let fixture: ComponentFixture<ComponentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
