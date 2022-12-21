import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<null | any>(null);
  user$ = this.user$$.asObservable();
  private isLoading$$ = new BehaviorSubject(false);
  isLoading$ = this.isLoading$$.asObservable();
  loadUsers() {
    this.isLoading$$.next(true);
    this.http.get<any[]>(`/api/users`).subscribe({
      // now our user observable won't complete and can be reused
      next: (users) => {
        this.isLoading$$.next(false);
        this.user$$.next(users);
      }
    })
  }

  constructor(private http: HttpClient) {
  }
}
