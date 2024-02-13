/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TotalGamesComponent } from './TotalGames.component';

describe('TotalGamesComponent', () => {
  let component: TotalGamesComponent;
  let fixture: ComponentFixture<TotalGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
