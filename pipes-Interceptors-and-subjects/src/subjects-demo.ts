import {AsyncSubject, BehaviorSubject, map, Observable, of, ReplaySubject, Subject} from "rxjs"

// Promise container (only 1 value)
Promise.resolve(1000)
// Observable container
of(1000, 100, 300).pipe()
new Promise((res, rej) => {
  setTimeout(() => {
    res(1000)
  })
})
// $ is convention for stream
// we can use observables for sockets to push data in the stream
// everytime we subscribe to s we create new observable
const s$ = new Observable((observer) => {
  observer.next(100);
  observer.next(200);
  observer.next(300);
  observer.error(new Error('Bad Error'));
  // NgOnDestroy for observable
  return () => {

  }
})

s$.pipe(
  map((a: any) => a + 1)
).subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => {
    console.log('completed')
  }
})
// long-lived observables are created only once with the first sub
// Subjects are like observables
// we can also call next on observer

function interval(delay: number, count: number | null = null) {
  let counter = 0;
  return new Observable(observer => {
    const id = setInterval(() => {
      // after taking the count we complete the stream and all complete methods are called
      if (count === counter) {
        observer.complete();
        return;
      }
      observer.next(counter++)
    }, delay);
    return () => {
      clearInterval(id)
    }
  })
}

const sub = interval(1000).subscribe(
  console.log
)
setTimeout(() => {
  sub.unsubscribe
}, 1000)
// Only way to push data in observable is if we have reference to it in observer
// conv for subject is double dollar sign
// this will log 100 3 times
const subj$$ = new Subject()
subj$$.subscribe(console.log)
subj$$.subscribe(console.log)
subj$$.subscribe(console.log)
subj$$.next(100)
// new subscription and 200 will be emitted 4 times after 1 s
setTimeout(() => {
  subj$$.subscribe(console.log);
  // we emit new value
  subj$$.next(200)
  // after 5 more sec we get 4x 200
  setTimeout(() => {
    subj$$.next(200)
  }, 500)
}, 1000)

// subject is a shared channel between all subs
// we can listen to and get all data when we connect to it
// cold observables (new instance every sub)
// hot observable (same instance every sub) - Subjects
// we can pipe subjects to observables
// subject with initial value keeps a behaviour state(value)
const bSubject$$ = new BehaviorSubject(1)
// logs 1
bSubject$$.subscribe(console.log)
setTimeout(() => {
    //logs 1
    bSubject$$.subscribe(console.log);
    //  pushes 100 which logs 2 times because we pushed new value
    bSubject$$.next(100)
    setTimeout(() => {
      // logs 100 after we sub again at later time
      bSubject$$.subscribe(console.log);
    }, 5000)
  }
  , 1000)

// holds last 20 values
const rSubject$$ = new ReplaySubject(20)
rSubject$$.next(100);
rSubject$$.subscribe(console.log)
rSubject$$.next(200);
rSubject$$.next(300);
rSubject$$.next(400);
// we get all the values until 20 buffer
rSubject$$.subscribe(console.log);
// Async Subject after completion we get last value
let subject = new AsyncSubject()
subject.subscribe({});
subject.next(1)
subject.next(2)
subject.next(3)
subject.subscribe({})
subject.next(4)
subject.complete();
//after we complete we get last value emitted or 4 iwherever we subscribed
