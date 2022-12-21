import {data} from './seed'
import {Article} from '../models/article/article.module'

export class ArticleData {
  getData() {
    let articles: Article[] = [];
    for (let i: number = 0; i < data.length; i++) {
      articles[i] = new Article(data[i].title, data[i].description, data[i].author, data[i].imageUrl)
    }
    return articles
  }
}
