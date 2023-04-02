import { createFeatureSelector, createSelector, } from '@ngrx/store'
import { IMainState } from '.'
import { RouterStateUrl } from './router';



// Here we create a selector for our component to modify the state
const mainSelector = createFeatureSelector<IMainState>('main')
const routerSelector = createFeatureSelector<{state:RouterStateUrl}>('router')
export const getCounter = createSelector(mainSelector,s=>s.counter);
export const getURL = createSelector(routerSelector, s => s?.state.url)
export const getUsers = createSelector(mainSelector,s=>s.users)