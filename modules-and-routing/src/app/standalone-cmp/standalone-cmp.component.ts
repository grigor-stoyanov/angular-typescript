import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-standalone-cmp',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './standalone-cmp.component.html',
  styleUrls: ['./standalone-cmp.component.css']
})
export class StandaloneCmpComponent implements OnInit {

  constructor() { }
  @Input() showValue:boolean = false;
  ngOnInit(): void {
  }

}
