import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter, getURL, getUsers } from './+store/selectors';
import { increment,loadUsers,loadUsersFailiure,loadUsersSuccess,setValue } from './+store/actions';
import { debounceTime, fromEvent, map, merge } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  //  now we use our selector to get a stream our our state
  counter$ = this.store.select(getCounter);
  url$ = this.store.select(getURL);
  // selector for users saved in app state
  users$ = this.store.select(getUsers);

  @ViewChild('emailFilter',{static:true}) emailFilter!:ElementRef<HTMLInputElement>;

  // merge action streams with rxjs to asses state of current action
  isFetchingUsers$ = merge(
    this.actions$.pipe(ofType(loadUsersSuccess),
    map(()=>true)),
    this.actions$.pipe(ofType(loadUsersFailiure),
    map(()=>false))
  )


  constructor(private store:Store,private actions$:Actions){
    // send the dispatch to trigger effect
    this.store.dispatch(loadUsers({filter:''}))
  }
  incrementHandler(){
    this.store.dispatch(increment());
  }
  setCounterValue(counter:number){
    this.store.dispatch(setValue({counter:counter}))
  }
  reloadHandler():void{
    this.store.dispatch(loadUsers({filter:this.emailFilter.nativeElement.value!}))
    
  }
  // Now instead of using service to make requests we can use the effect to handle it for us by dispatching the correct event
  ngOnInit(): void {
      fromEvent(this.emailFilter.nativeElement,'input')
      .pipe(debounceTime(500),map(e=>(e.target as HTMLInputElement).value ))
      .subscribe((filter)=>this.store.dispatch(loadUsers({filter})) )
  }
}
