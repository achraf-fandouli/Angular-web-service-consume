import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  students:any[]=["Achraf","Bilel","Amine","Rihab","Salem","Rami"]
  constructor() { }

  getStudents():string[]{
    return this.students;
  }
}
