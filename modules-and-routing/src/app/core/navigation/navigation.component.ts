import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }
  // Won't work on older versions
  // It is not provided like @Injectable[provided in root]
  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
