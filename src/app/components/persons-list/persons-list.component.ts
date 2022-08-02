import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/person.service';



@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  persons: any;

  
  constructor(private personService: PersonService) { }
  ngOnInit(): void {
    this.showAllPersons();
 
  }

  // Daten aller Personen holen um sie in einer Liste anzuzeigen
  showAllPersons(): void {
    this.personService.getAll()
      .subscribe(
        data => {
          this.persons = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

}
