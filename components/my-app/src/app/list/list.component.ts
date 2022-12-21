import {Component, OnInit} from '@angular/core';
import {ICustomEvent} from "../list-item/list-item.component";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  myProp = 'Hello WOrld!'
  showFirstName = false;
  users = [{
    firstName: 'Ivan',
    lastName: 'Ivanov'
  }, {
    firstName: 'Petur',
    lastName: 'Petrov'
  }, {
    firstName: 'Dimitur',
    lastName: 'Dimitrov'
  },
  ]

  handleClickEvent(event: MouseEvent) {
    if (!this.showFirstName) {
      this.showFirstName = true;
      return;
    }
    this.showFirstName = false;
  }

  selectedUserIndex:number|null = null;

  get showSelectedIndex(): boolean {
    return (this.selectedUserIndex === null ? false : this.selectedUserIndex >= 0);
  }

  listItemClickHandler(index: number) {
    if (this.selectedUserIndex === index) {
      this.selectedUserIndex = null;
      return;
    }
    this.selectedUserIndex = index
  }

  customEventHandler($event: ICustomEvent) {
    console.log($event)
  }

  constructor() {
    setTimeout(() => {
        this.myProp = 'Hello Other World'
      },
      1000)

  }

}



