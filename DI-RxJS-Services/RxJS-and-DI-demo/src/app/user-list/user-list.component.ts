import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!:any[];
  isLoading=true;
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    // this.userService.getUsers().then(users=>{
    //   this.isLoading=false;
    //   this.users=users;
    // })
    // HttpClient Adds a level of abstraction to work with different environments
    this.userService.getUsers().subscribe(
      users=>{
        this.isLoading=false;
        this.users=users;
      }
    )
  }

}
