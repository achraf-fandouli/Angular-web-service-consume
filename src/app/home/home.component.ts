import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  etudiants:string[]=[];
  mesPosts:any[]=[];

  nom:string="mon composant"

  constructor( private userService : UsersService, private postService : PostsService) {
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("onOnInit")
    this.etudiants=this.userService.getStudents();
    this.postService.getPosts().subscribe(
      data => {
        //console.log(data);
        this.mesPosts=data;
      }
    )

  }


}
