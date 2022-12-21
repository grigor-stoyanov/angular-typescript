import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {GlobalLoaderService} from "../../core/services/global-loader.service";
import {IUser} from "../../shared/interfaces";
import { Test } from 'src/app/test';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userList: IUser[] | null = null;

  constructor(private UserService: UserService,
              private GlobalLoaderService: GlobalLoaderService,
              private t:Test) {
    (window as any).t2=t;
  }


  loadUsers(): void {
    this.GlobalLoaderService.showLoader('Loading Users');
    this.UserService.loadUsers().subscribe({
      next: (userList) => {
        this.GlobalLoaderService.hideLoader();
        this.userList = userList;
      }
    })
  }


  ngOnInit(): void {
    this.loadUsers()
  }


  reloadUsersHandler(): void {
    this.loadUsers()
  }

}
