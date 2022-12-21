import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

// Make service injectable
// Make it usable in every component as well
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {

  }

  getUsers() {
    // return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }
}

export class UserServiceMock {
  constructor() {
  }

  getUsers() {
    return Promise.resolve({username: 'Ivan'})
  }
}
