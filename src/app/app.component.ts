import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amsAngular';
  formateur="Achraf";
  prix="450";
  estHibryde:boolean=true;
  bootCamp:string[]=["devOps","Spring Boot","Scrum","Angular"];

}
