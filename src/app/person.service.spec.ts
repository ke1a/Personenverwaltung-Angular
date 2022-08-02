import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PersonService } from './person.service';
import { Person } from './person';

describe('PersonService', () => {
  let service: PersonService;
  let httpController: HttpTestingController;
  let url = 'http://localhost:3000/persons';
  

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      HttpClientTestingModule],
      providers: [
        PersonService
      ]
    });
    service = TestBed.get(PersonService);
    httpController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all persons from API via GET', () => {
    const dummyPerson: Person[] = [
      {
        "firstName": "Max",
        "lastName": "Muster",
        "email": "my@mail.de",
        "id": 4
      },
      {
        "firstName": "Maxi",
        "lastName": "Mustermann",
        "email": "mmm@web.de",
        "id": 12
      },
      {
        "firstName": "Anna",
        "lastName": "Meyer",
        "email": "a.m@web.de",
        "id": 13
      }
    ];

    service.getAll().subscribe(persons =>  {
      expect(persons.length).toBe(3);
      expect(persons).toEqual(dummyPerson);
    });

    const req = httpController.expectOne(url);
    expect(req.request.method).toBe('GET');

    req.flush(dummyPerson);
  });

  it('should retrieve person by id from API via GET', () => {
    const dummyPerson: Person[] = [
      {
        "firstName": "Maxi",
        "lastName": "Mustermann",
        "email": "mmm@web.de",
        "id": 12
      }
    ];

    service.get(4).subscribe(persons =>  {
      expect(persons.length).toBe(1);
      expect(persons).toEqual(dummyPerson);
    });

    const req = httpController.expectOne('http://localhost:3000/persons/4');
    expect(req.request.method).toBe('GET');

    req.flush(dummyPerson);
  });

  it('should create new Person via POST', () => {
    const toCreatePerson: Person[] = [
      {
        "firstName": "Maxi",
        "lastName": "Mustermann",
        "email": "mmm@web.de",
        "id": 12
      }
    ];

    service.create(toCreatePerson).subscribe(persons =>  {
      expect(persons.length).toBe(1);
      expect(persons).toEqual(toCreatePerson);
    });

    const req = httpController.expectOne('http://localhost:3000/persons');
    expect(req.request.method).toBe('POST');

    req.flush(toCreatePerson);
  });

  it('should update new Person via PUT', () => {
    const toUpdatePerson: Person[] = [
      {
        "firstName": "Maxi",
        "lastName": "Mustermann",
        "email": "mmm@web.de",
        "id": 12
      }
    ];

    service.update(4, toUpdatePerson).subscribe(persons =>  {
      expect(persons.length).toBe(1);
      expect(persons).toEqual(toUpdatePerson);
    });

    const req = httpController.expectOne('http://localhost:3000/persons/4');
    expect(req.request.method).toBe('PUT');

    req.flush(toUpdatePerson);
  });

  it('should delete a person by id via DELETE', () => {
    const toUpdatePerson: Person[] = [
      {
        "firstName": "Maxi",
        "lastName": "Mustermann",
        "email": "mmm@web.de",
        "id": 12
      }
    ];

    service.delete(4).subscribe(persons =>  {
      expect(persons.length).toBe(1);
      expect(persons).toEqual(toUpdatePerson);
    });

    const req = httpController.expectOne('http://localhost:3000/persons/4');
    expect(req.request.method).toBe('DELETE');

    req.flush(toUpdatePerson);
  });
});
