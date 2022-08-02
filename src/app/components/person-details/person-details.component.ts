import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  }
  currentId = this.route.snapshot.paramMap.get('id');


  constructor(private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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

  deletePerson(): void {
    this.personService.delete(this.currentId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(["/persons-list"]);
        },
        error => {
          console.log(error);
        }
      );
  }

}
