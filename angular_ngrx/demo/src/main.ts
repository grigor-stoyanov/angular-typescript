import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { BehaviorSubject, scan, filter, map, distinctUntilChanged, Observable, Subject, switchMap, OperatorFunction,merge } from "rxjs";


// // Synchronous version of State Management
// const initialState = {
//   arr: null,
//   obj: undefined,
//   count: 0,
//   users: null
// }

// // Simular to NgRx we modify state according to event
// // One of the principles of redux is not modifying data
// // Can use Router trough NgRX
// function reducer(state: any, action: any) {
//   if (action.type === 'EVENT_1') {
//     return {
//       ...state,
//       arr: action.payload
//     };
//   }
//   if (action.type === 'EVENT_2') {
//     return {
//       ...state,
//       obj: action.payload
//     };
//   }
//   if (action.type === 'EVENT_3') {
//     return {
//       ...state,
//       count: action.payload
//     };
//   }
//   if (action.type === 'LOAD_USERS_SUCCESS') {
//     return {
//       ...state,
//       users: action.payload
//     }
//   }
//   // return state without modifying it
//   return state
// }

// // The reducer aplies payload to the initial state according to event
// const result =
//   [
//     { type: 'EVENT_1', payload: [1, 2, 3] },
//     { type: 'EVENT_2', payload: { a: 1 } },
//     { type: 'EVENT_3', payload: 3 },
//   ].reduce(reducer, initialState);


// console.log(result) //returns synchronous state as result

// interface IState {
//   arr: number[] | null;
//   obj: { test: number } | undefined;
//   count: number;
//   users: null|any;
// }
// interface IAction{
//   type:string;
//   payload:IState[keyof IState]
// }

// // Async version of Redux
// function getState(reducer: any, initialState: IState) {
//   const state$$ = new BehaviorSubject<IAction | null>(null); // Doesent Emit if first action is null=
//   const actions$$ = new Subject<any>(); // action stream to listen for effects
//   return {
//     action$: actions$$.asObservable(),
//     state$: state$$.asObservable()
//       // scan works like reducer applying func to source after initial state
//       .pipe(
//         // here we need to filter the first emition to avoid null action
//         filter(val => !!val),
//         scan(reducer, initialState)),
//     dispatch: (action: any) => {
//       actions$$.next(action);
//       state$$.next(action);
//     }
//   };
// };

// const { state$, dispatch, action$ } = getState(reducer, initialState)

// // works like NgRx Selector Only emeits when the value of count is changed
// function createSelector(state$: Observable<IState>, mapFn: (state: IState) => IState[keyof IState]): Observable<IState[keyof IState]> {
//   return state$.pipe(map(mapFn), distinctUntilChanged())
// }
// const arrSelector$ = createSelector(state$, s => s.count);// can be streamed with async pipe

// function createEffect(actions$: Observable<any>, actiontype: string, op1: OperatorFunction<any, any>) {
//   // We filter the emission for the correct action
//   // then if action is deceted we apply state change effect
//   // Note it wont actually select the result
//   actions$.pipe(filter(a => !!a && a.type === actiontype), op1).subscribe(action$ => {
//     dispatch(action$);
//   });
// }
// // dispatching Load Users Event will Listen for change and update accordingly then dispatch SUCCESS event to the reducer
// createEffect(action$, 'LOAD_USERS', switchMap(
//   () => fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(users =>  ({ type: 'LOAD_USERS_SUCCESS', payload: users }) )
//     ));
// // dispatching success event should trigger selector to print users on console
// createSelector(state$, s => s.users).subscribe(console.log);

// // Each Dispatch overrides with a new object in a different state
// arrSelector$.subscribe(console.log)
// state$.subscribe(console.log)
// dispatch(null) // Will Not Emit null value
// dispatch({ type: 'EVENT_1', payload: [1, 2, 3] }) // retruns new State
// setTimeout(() => dispatch({ type: 'EVENT_1', payload: [2, 4, 6] })) /// returns new state
// dispatch({ type: 'EVENT_2', payload: { test: true } }) // returns new state
// setTimeout(() => dispatch({ type: 'EVENT_3', payload: 1000 }), 5000)
// dispatch({ type: 'LOAD_USERS' });// emits unmodified state

// // If we want to know if something is loading we can use the actions$ stream
// const isLoadingUsers$ = merge(action$.pipe(filter(a=>a.type=='LOAD_USERS'),map(() => true))
// ,action$.pipe(filter(a => a.type ==='LOAD_USERS_SUCCESS'),map(()=>false)))

// // this way we merge the streams to listen weather data is loaded or not
// isLoadingUsers$.subscribe(console.log)