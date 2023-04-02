import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { increment, loadUsersFailiure, loadUsersSuccess, setValue } from './actions';
import { routerReducer } from "@ngrx/router-store";
import { RouterState } from "@angular/router";

// Contains state and a reducer map of reducers for that state

export interface IMainState{
    counter:number;
    users:null|any[]
}

export interface IAppState {
    main: IMainState;
    router:RouterState;
}

const mainInitialState: IMainState = {
    counter:0,
    users:null
}

const mainReducer = createReducer<IMainState>(
    mainInitialState,
    on(increment,(state)=>{
        const {counter} = state;
        return {...state,counter:counter+ 1}
    }),
    on(setValue,(state,action)=>{
        const {counter} = state;
        const {counter:newCounterValue} = action;
        return {...state,counter:newCounterValue}
    }),
    
    on(loadUsersSuccess,(state,{users})=>{
        return {...state,users}
    }),
    on(loadUsersFailiure,(state,{error})=>{
        return {...state,error}
    })
)
// Redux list of reducers are saved in an ActionReducerMap
export const reducers: ActionReducerMap<IAppState> = {
    main: mainReducer,
    router: routerReducer
}