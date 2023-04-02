import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user-service.service';
import { createEffect,Actions,ofType } from "@ngrx/effects";
import { catchError, switchMap,map } from "rxjs";
import { loadUsers, loadUsersFailiure, loadUsersSuccess } from "./actions";

// Effects do the dispatching automatically
@Injectable({
    providedIn: 'root'
})
export class Effects {
    // The effect subscribes to actions and when there is loadUsers event dispatched makes the http no need to put in reducer
    loadUsers = createEffect(()=> this.actions$.pipe(ofType(loadUsers),
        switchMap(({filter})=> this.userService.loadUsers(filter).pipe(
            map((users)=> loadUsersSuccess({users})),
            catchError((error, caught) => [loadUsersFailiure({ error })])
            )))) 

    // actions$ hold all actions that are applied
    constructor(private actions$:Actions,private userService:UserService){

    }
}