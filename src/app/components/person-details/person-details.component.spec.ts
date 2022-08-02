import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonService } from 'src/app/person.service';

import { PersonDetailsComponent } from './person-details.component';

describe('PersonDetailsComponent', () => {
  let component: PersonDetailsComponent;
  let fixture: ComponentFixture<PersonDetailsComponent>;
  let element: any, de: DebugElement;
  let service: PersonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDetailsComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(PersonService);
    fixture = TestBed.createComponent(PersonDetailsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;     
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Personendetails'`, () => {
    const fixture = TestBed.createComponent(PersonDetailsComponent);
    const titleElement: HTMLElement = fixture.nativeElement;
    expect(titleElement.textContent).toContain('Personendetails');
  });

  it('should call deletePerson() on click', async(() => {
    spyOn(component, 'deletePerson');
    let button = de.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.deletePerson).toHaveBeenCalled();
    });
  }));

});
