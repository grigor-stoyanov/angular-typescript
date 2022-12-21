import {Injectable} from "@angular/core";
import {IUser} from "./shared/interfaces";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user/user.service";

// Stopped being used because they block the navigation from turning back
// Simular to synchronous request for navigation
@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot) {
    // Returns Observable
    // Must be completed before entering the component
    return this.userService.loadUser(route.params['id']);
  }
}
