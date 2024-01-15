/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopForeverComponent } from './topForever.component';

describe('TopForeverComponent', () => {
  let component: TopForeverComponent;
  let fixture: ComponentFixture<TopForeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopForeverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopForeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
