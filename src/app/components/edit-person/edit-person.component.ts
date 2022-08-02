import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  }
  submitted = false;

  // Id der zu bearbeitenden Person
  currentId= this.route.snapshot.paramMap.get('id');

  constructor(private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // Id der zu bearbeitenden Person holen
    this.getPerson(this.route.snapshot.paramMap.get('id'));
  }

  getPerson(id: any): void {
    this.personService.get(id)
      .subscribe(
        data => {
          this.person = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  savePersonChanges(): void {
    const data = {
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      email: this.person.email,
    };
    this.personService.update(this.currentId, data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(["/persons-list"]);
        },
        error => {
          console.log(error);
        }
      );
  }

  deletePerson(): void {
    this.personService.delete(this.currentId)
      .subscribe(
        response => {
          console.log(response);
          // automatisches zurück navigieren zur Liste aller Personen nach erfolgreicher Löschung
          this.router.navigate(["/persons-list"]);
        },
        error => {
          console.log(error);
        }
      );
  }
}
/*function id(id: any, data: { id: string; firstName: string; lastName: string; email: string; }) {
  throw new Error('Function not implemented.');
}

function id1(id1: any, data: { firstName: string; lastName: string; email: string; }) {
  throw new Error('Function not implemented.');
}

*/