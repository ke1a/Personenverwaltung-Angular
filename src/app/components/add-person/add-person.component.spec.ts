import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AddPersonComponent } from './add-person.component';

describe('AddPersonComponent', () => {
  let component: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;
  let element: any, de: DebugElement;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonComponent
       ],
       imports: [
        HttpClientModule, 
        RouterTestingModule,
        FormsModule
     ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;     
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Neue Person erstellen'`, () => {
    const fixture = TestBed.createComponent(AddPersonComponent);
    const titleElement: HTMLElement = fixture.nativeElement;
    expect(titleElement.textContent).toContain('Neue Person erstellen');
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

  it('should call addNewPerson() on click', async(() => {
    spyOn(component, 'addNewPerson');
    let button = de.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.addNewPerson).toHaveBeenCalled();
    });
  }));

});
