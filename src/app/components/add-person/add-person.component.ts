import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person = {
    firstName: '',
    lastName: '', 
    email: ''
  }


  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
  }

  // neue Person mit Werten aus Input erstellen
  addNewPerson(): void {
    const data = {
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      email: this.person.email
    };
    this.personService.create(data)
      .subscribe(
        response => {
          console.log(response);
          // automatisches zurück navigieren zur Liste aller Personen
          this.router.navigate(['/persons-list']);
        },
        error => {
          console.log(error);
        }
      );
  }

}
