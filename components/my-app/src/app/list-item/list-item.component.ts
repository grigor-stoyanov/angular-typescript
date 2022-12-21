import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';

export interface ICustomEvent {
  test: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnDestroy {
  // the ! is guarantee that the prop will be received
  // We must import Input decorator to tell Angular that the props will come from outside
  @Input() user!: {
    firstName: string,
    lastName: string
  };
  @Input() showFirstName!: boolean;
  // staticStrings don't need to be bound
  @Input() staticString!: string;

  intervalId: number | undefined;

  // cannot be called after constructor changes data use different Life Hook for that
  ngOnInit() {
    console.log(this.user)
    this.intervalId = setInterval(() => {console.log('asd')
    }, 5000) as unknown as number;
  }
  // clears timer every time a new one is started to not run out of mem
  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  constructor() {
    // We don't have access to the Input Props yet!!
    // Unless we implement OnInit!!!
    // debugger;
    console.log(this.user)
  }

  @Output() customEvent = new EventEmitter<ICustomEvent>();

  // want to catch propagated event upwards
  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation()
    this.customEvent.emit({test: 123})
  }

}


//
// class Person {
//   name!: string;
//
//   // Called by Angular after all inputs have been bound and we have access to the input props!!
//   ngOnInit() {
//     console.log(this.name)
//   }
//
// }
//
// const ivan = new Person();
// ivan.name = 'Ivan';
