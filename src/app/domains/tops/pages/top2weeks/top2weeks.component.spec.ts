/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Top2weeksComponent } from './top2weeks.component';

describe('Top2weeksComponent', () => {
  let component: Top2weeksComponent;
  let fixture: ComponentFixture<Top2weeksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top2weeksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top2weeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
