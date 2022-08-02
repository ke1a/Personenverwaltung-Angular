import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { AddPersonComponent } from './components/add-person/add-person.component';

const routes: Routes = [
  { path: '', redirectTo: 'persons-list', pathMatch: 'full' },
  { path: 'persons-list', component: PersonsListComponent},
  { path: 'edit-person', component: EditPersonComponent},
  { path: 'edit-person/:id', component: EditPersonComponent},
  { path: 'person-details', component: PersonDetailsComponent},
  { path: 'person-details/:id', component: PersonDetailsComponent },
  {path: 'add-person', component: AddPersonComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
