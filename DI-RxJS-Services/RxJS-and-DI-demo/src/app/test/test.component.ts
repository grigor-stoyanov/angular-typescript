import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, Injector,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // Inputs will be compared to === No new reference is made (no change detection will trigger)
  // Stops Component from constantly rendering depending on what is shown or not shown
  // Deactivates change detection until set on default again
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, OnChanges {

  @Input() users!: { name: string }[];

  constructor(
    // This is a dependency Injection
    private injector:Injector,
    private cdRef: ChangeDetectorRef
  ) {
    // Uncouples from change detection and absolutely detached (not rendered)
    this.cdRef.detach();

  }

  ngOnInit():
    void {
    // Triggers a change detect cycle on next change detection
    this.cdRef.markForCheck()
  }

  // // Called after NgOnInnit
  ngOnChanges(changes: SimpleChanges): void {
  //   // changes contain first prop which changed,current and prev value....
  //   console.log(changes)
  //   // Trigger a change detect manually
  //   if (this.users.length > 4) {
  //     this.cdRef.detectChanges();
  //   }
  }

}
