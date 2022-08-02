import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { PersonService } from './person.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    EditPersonComponent,
    PersonsListComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
