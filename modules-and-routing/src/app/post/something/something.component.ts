import { Component, OnInit } from '@angular/core';
import {Test} from "../../test";

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit {

  constructor(private t: Test) {
    (window as any).t1 = t
  }

  ngOnInit(): void {
  }

}
