# Personenverwaltung
Angular CRUD Anwendung zur Personenverwaltung mit einem Fake Backend über JSON Server.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `json-server – watch db.json` to start the fake [JSON-Server](https://www.npmjs.com/package/json-server) at http://localhost:3000/ . 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Vorgehensweise
### Fake Backend
[JSON Server](https://www.npmjs.com/package/json-server) als Fake Backend ausgewählt.   
Installation: npm install -g json-server  
Die db.json Datei wird in die Angular Anwendung hinzugefügt. Sie beinhaltet ein Array aus Person-Objekten mit den Atrributen id, firstName, lastName, email.

### Erstellung der notwendigen Komponenten und dazugehörigen Testdateien
Vier Angular Komponenten wurden mit der Angular CLI erstellt (AddPerson, EditPerson, PersonDetails, PersonsList). So wurden direkt die zugehörigen Testdateien zu den jeweiligen Komponenten erstellt.


### Erstellung eines Service für die Kommunikation mit dem JSON Server
In dem PersonService werden alle http-Aufrufe durchgeführt.


#### Offene Punkte
Keine FormValidation implementiert.  
Kein AuthGuard, wäre aber sinnvoll um Navigation über URL zu vermeiden.
