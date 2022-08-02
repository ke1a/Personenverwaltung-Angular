import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { EditPersonComponent } from './edit-person.component';

describe('EditPersonComponent', () => {
  let component: EditPersonComponent;
  let fixture: ComponentFixture<EditPersonComponent>;
  let element: any, de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;    
    de = fixture.debugElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Person verwalten'`, () => {
    const fixture = TestBed.createComponent(EditPersonComponent);
    const titleElement: HTMLElement = fixture.nativeElement;
    expect(titleElement.textContent).toContain('Person verwalten');
  });

  it(`should have a form`, () => {
    expect(de.query(By.css('form'))).toBeTruthy();
  });
  
  it(`should have a form label called Vorname:`, () => {
    expect(de.query(By.css('label')).nativeElement.innerText).toBe('Vorname:');
  });

  it(`should have a input field`, () => {
    expect(de.query(By.css('label'))).toBeTruthy();
  });

});
