import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reduce',// Simular to Change Detection On Push which will trigger only only on ===
  // pure falls for no memorization
  // Simular to Change Detection On Push which will trigger only only on ===
  // Pipes are good but are difficult to debug usually eliminated with rxjs
  pure:true
})
export class ReducePipe<T, I> implements PipeTransform {

  transform(array: T[], reduceFn: (acc: any, curr: T) => any, initialValue: I): any {
    if (initialValue!==undefined) {
      return array?.reduce(reduceFn, initialValue);
    }
    return  array?.reduce(reduceFn);
  }

}
