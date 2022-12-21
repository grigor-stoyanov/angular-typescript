import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.paramMap);
    this.activatedRoute.params.subscribe(console.log);
    console.log(this.activatedRoute.snapshot.data);
  }

  ngOnInit(): void {
  }

}
