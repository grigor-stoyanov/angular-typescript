import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  loadUsers() {
    return this.http.get<IUser[]>('http://jsonplaceholder.typicode.com/users')
  }

  loadUser(id: string) {
    return this.http.get<IUser>('http://jsonplaceholder.typicode.com/users/' + id)
  }
}
