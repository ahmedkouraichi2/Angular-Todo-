import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAlertComponent } from './todo-alert.component';

describe('TodoAlertComponent', () => {
  let component: TodoAlertComponent;
  let fixture: ComponentFixture<TodoAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
