import {Article} from "../models/article/article.module";
import {Component, OnInit} from '@angular/core';
import {ArticleData} from "../data/data";


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles!: Article[]

  ngOnInit(): void {
    this.articles = new ArticleData().getData()
  }

  constructor() {
  }


}
