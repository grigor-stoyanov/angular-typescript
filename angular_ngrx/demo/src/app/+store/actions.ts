import { createAction, props } from "@ngrx/store";


// Create an action to be used by reducer via internal method

const actionTypes = {
    increment: 'INCREMENT',
    setValue:'SET_VALUE',
    loadUsers:'LOAD_USERS',
    loadUsersSuccess:'LOAD_USERS_SUCCESS',
    loadUseresFailiure:'LOAD_USERS_FAILIURE'
}


export const increment = createAction(actionTypes.increment)
// props provides typisations for setValue
export const setValue = createAction(actionTypes.setValue,props<{counter:number}>())
export const loadUsers = createAction(actionTypes.loadUsers,props<{filter?:string}>());
// these actions are dispatched after effect has completed and returned a value and they are handled by reducer
export const loadUsersSuccess = createAction(actionTypes.loadUsersSuccess,props<{users:any[]}>());
export const loadUsersFailiure  = createAction(actionTypes.loadUseresFailiure,props<{error:any}>());