// rxjs is largely used and a part of Angular HTTP Client
import {map, Observable, interval} from "rxjs";

function getValue() {
  // Promise directly returns value
  return new Promise((res) => {
    setTimeout(() => {
      res('Test');
    }, 200)
  });
}

function getValue2(cb: (...args: any[]) => void) {
  setTimeout(() => cb('TEST'), 200)
}

// callback hell
getValue2(function (value) {
  console.log(value)
})


// Promise chain
Promise.resolve(1)
  .then(function (value) {
    console.log(value)
  });

// Synchronous chain analog to promise
[1]
  .map((x) => x + 1)
  .map(function (x) {
    return x * x
  });

//JS has only 1 thread so asynchronous code is pref

// Synchronous analog to observable
[1, 2, 3, 4]
  .map((x) => x + 2);

//
// function interval(intervalValue: number = 0) {
//   return new Observable<number>(observer => {
//     let counter = 0;
//     const timerId = setInterval(() => {
//       observer.next(counter++)
//     }, intervalValue);
//    // Clear Timer after Used Observable
//    return () => {
//    clearInterval(timerId);
//    };
//   })
// }


const O = new Observable<number>(observer => {
  let counter = 0
  setInterval(() => observer.next(counter++), 1000)
  //pushes a couple of things
  // observer.next(100);
  // observer.next(200);
  // observer.next(300);
  // observer.next(400);
  // Additional step complete because we have N values unlike promises
  observer.complete()
});
// when we subscribe we see all the things
O.subscribe(console.log);


// RxJS has constructor functions already created
const stream$ = interval(5000).pipe(
  map((x) => x + 1),
  map((x) => x + 1),
  map((x) => x + 1),
  map((x) => x + 1),
)

// rxJS streams start observables as soon as i use subscribe
setTimeout(() => {
  const sub =
    stream$.subscribe(console.log)
  setInterval(() => {
      sub.unsubscribe()
    }, 1000
    // It will stop the interval
  )
}, 3000)

setTimeout(() => {
  const sub = stream$.subscribe({
    // go to next step
    next: (x) => console.log(x),
    // when error is triggered
    error: (err) => console.log(err),
    // when Observable.complete is called
    complete: () => console.log('Observable complete')
  })
  setTimeout(() => {
    // will not trigger complete destroys the Observable
    sub.unsubscribe();
  }, 1000)
}, 3000)
